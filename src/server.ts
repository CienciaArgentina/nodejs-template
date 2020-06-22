import { logger,startServer,connectDb } from '@cienciaargentina/nodejs-backend-commons';
import routes from './components';
import { LogEntry } from 'winston';
const knexConfig = require('../knexfile');

process.on('uncaughtException', (e) => {
  logger.error(e);
  process.exit(1);
});
process.on('unhandledRejection', (e) => {
  console.log(e); //TODO
  process.exit(1);
});

startServer(+(process.env.HTTP_PORT || 8080),routes);
connectDb(knexConfig.cienciaArgDb);
