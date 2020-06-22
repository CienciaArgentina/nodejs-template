import { logger,startServer } from '@cienciaargentina/nodejs-backend-commons';
import routes from './components';
import { connectDb } from './config/db';
import { LogEntry } from 'winston';

process.on('uncaughtException', (e) => {
  logger.error(e);
  process.exit(1);
});
process.on('unhandledRejection', (e) => {
  logger.log(e as LogEntry);
  process.exit(1);
});

startServer(+(process.env.HTTP_PORT || 8080),routes);
connectDb();
