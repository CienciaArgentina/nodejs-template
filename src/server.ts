import {logger } from './utils';
import { connectDb } from './config/db';
import { startServer } from './config/express';
import { LogEntry } from 'winston';

process.on('uncaughtException', (e) => {
    logger.error(e);
    process.exit(1);
  });

  process.on('unhandledRejection', (e) => {
    logger.log(e as LogEntry);
    process.exit(1);
  });

  (async (): Promise<void> => {
    const {HTTP_PORT = 8080 } = process.env;
    startServer(HTTP_PORT as number);
    await connectDb();
  })
