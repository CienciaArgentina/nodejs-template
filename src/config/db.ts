import 'reflect-metadata';
import { createConnection, getConnectionOptions } from 'typeorm';
import { LoggerTypeOrm } from '../utils/';

//TODO: Es incorrecto crear una instancia con el new y no inyectarla. Buscar alternativa
export const connectDb = async (): Promise<void> => {
  const connectionOptions = await getConnectionOptions();
  const maxQueryTime: number = +(process.env.DB_QUERY_TIME || '1000');
  const mergedOptions = { ...connectionOptions, logger: new LoggerTypeOrm(), maxQueryExecutionTime: maxQueryTime };
  await createConnection(mergedOptions);
};