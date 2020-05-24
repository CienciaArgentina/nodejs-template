//* eslint-disable @typescript-eslint/no-explicit-any */
import { logger } from './logger';
import { Logger, QueryRunner } from 'typeorm';
import { isNullOrUndefined } from 'util';

//###############################################################################################
//###########################  IMPORTANT: NEVER LOG QueryRunner  ################################
//###############################################################################################

export class LoggerTypeOrm implements Logger {
  log(level: 'log' | 'info' | 'warn', message: any, queryRunner?: QueryRunner): void {
    logger.log(level, message);
  }

  logMigration(message: string, queryRunner?: QueryRunner): void {
    logger.info(message);
  }

  logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner): void {
    if (!isNullOrUndefined(process.env.DB_QUERY_TIME)) return;
    const message = {
      query: query,
      parameters: parameters,
    };
    logger.info(message);
  }

  logQueryError(error: string, query: string, parameters?: any[], queryRunner?: QueryRunner): void {
    const message = {
      query: query,
      parameters: parameters,
    };
    logger.error(error, message);
  }

  logQuerySlow(time: number, query: string, parameters?: any[], queryRunner?: QueryRunner): void {
    const message = {
      query: query,
      parameters: parameters,
      executionTime: time,
    };
    logger.info(message);
  }

  logSchemaBuild(message: string, queryRunner?: QueryRunner): void {
    logger.info(message);
  }
}