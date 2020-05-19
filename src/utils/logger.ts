import winston, { createLogger, Logger } from 'winston';
import { Environment, serviceName } from '../commons/constants';

export const transports = {
  console: new winston.transports.Console(),
};

const levelLogger = process.env.NODE_ENV === Environment.Production ? 'info' : 'debug';

export const logger: Logger = createLogger({
  level: levelLogger,
  defaultMeta: { service: serviceName },
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  transports: [transports.console],
});

winston.exceptions.handle(transports.console);
