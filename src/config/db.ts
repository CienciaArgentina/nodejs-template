import Knex from 'knex';
const knexConfig = require('../../knexfile');
import { Model, ForeignKeyViolationError, ValidationError } from 'objection';

export const connectDb = (): void => {
  const knex = Knex(knexConfig.cienciaArgDb);
  Model.knex(knex);
};
