import { getRepository } from 'typeorm';
import { Gender, GenderEntity } from '../../entity/Gender';

export const findGenderById = async (id: string): Promise<Gender | undefined> => {
  const genderRepository = getRepository<Gender>(GenderEntity);
  return await genderRepository.findOne(id, { cache: true });
};
