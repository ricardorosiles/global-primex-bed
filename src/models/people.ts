import { Optional, ModelDefined, DataTypes, Sequelize, FindOptions } from 'sequelize';

export type PeopleAttributes = {
  id: string;
  name: string;
  last_name: string;
  second_last_name: string;
  address: string;
  phone: string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
};

export type PeopleCreationAttributes = Optional<
  PeopleAttributes,
  'id' | 'created_at' | 'updated_at' | 'deleted_at'
>;
export type PeopleFindOptions = FindOptions<PeopleAttributes>;
export type PeopleDefined = ModelDefined<PeopleAttributes, PeopleCreationAttributes>;

export const definePeopleModel = (sequelize: Sequelize) => {
  const People: PeopleDefined = sequelize.define(
    'people',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      second_last_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      tableName: 'people',
      paranoid: false,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
    },
  );

  return People;
};
