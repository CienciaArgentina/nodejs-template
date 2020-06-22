import { isNullOrUndefined } from 'util';
import { HTTP404Error } from '@cienciaargentina/nodejs-backend-commons';
import { findGenderById } from './repository';
import Gender from '../../models/Gender';

export const getById = async (id: string): Promise<Gender> => {
  const gender = await findGenderById(id);
  if (isNullOrUndefined(gender)) throw new HTTP404Error();

  return gender;
};
