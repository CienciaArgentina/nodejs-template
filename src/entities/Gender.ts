import { EntitySchema } from 'typeorm';
import { TableNames, EntityNames } from '../commons/constants';

export interface Gender {
  id: string;
  description: string;
  dateCreated: Date;
  dateDeleted?: Date;
}

export const GenderEntity = new EntitySchema<Gender>({
  name: EntityNames.Gender,
  tableName: TableNames.Gender,
  columns: {
    id: {
      type: String,
      primary: true
    },
    description: {
      type: String,
    },
    dateCreated: {
      type: Date,
    },
    dateDeleted: {
      type: Date,
    },
  },
});
