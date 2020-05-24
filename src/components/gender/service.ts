import { isNullOrUndefined } from 'util';
import { HTTP400Error, HTTP401Error, HTTP404Error } from '../../utils/error/HTTP400Error';
import { findGenderById } from './repository';
import Gender from '../../models/Gender';

export const getById = async (id: string): Promise<Gender> => {
  const gender = await findGenderById(id);
  if (isNullOrUndefined(gender)) throw new HTTP404Error();

  return gender;
};
