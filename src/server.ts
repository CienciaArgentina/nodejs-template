import http from 'http';
import express from 'express';
import 'express-async-errors';
import { applyMiddleware, applyRoutes, logger } from './utils';
import middleware from './middleware';
import errorHandlers from './middleware/errorHandlers';
import routes from './services';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

// createConnection method will automatically read connection options
// from your ormconfig file or environment variables
createConnection().then(() => {
  process.on('uncaughtException', (e) => {
    logger.error(e);
    // errorManagement.handler.handleError(error);
    // if (!errorManagement.handler.isTrustedError(error))
    process.exit(1);
  });

  process.on('unhandledRejection', (e) => {
    console.error(e);
    // logger.log(e);
    process.exit(1);
  });

  const app = express();
  applyMiddleware(middleware, app);
  applyRoutes(routes, app);
  applyMiddleware(errorHandlers, app);

  const { HTTP_PORT = 8080 } = process.env;
  const server = http.createServer(app);

  server.listen(HTTP_PORT, () => logger.info(`Server is running ${HTTP_PORT}`));
});
