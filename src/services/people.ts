import { database } from '../database';

type PeopleCreate = {
  name: string;
  last_name: string;
  second_last_name: string;
  phone: string;
  address: string;
};

export const create = async (data: PeopleCreate) => {
  try {
    const foundPhoneNumber = await findByPhoneNumber(data.phone);

    if (foundPhoneNumber) {
      return foundPhoneNumber.toJSON();
    }

    const peopleCreated = await database.people.create({ ...data });

    return peopleCreated;
  } catch (error) {
    console.log(error, '========');
  }
};

export const findByPhoneNumber = async (phone: string) =>
  await database.people.findOne({ where: { phone } });

export const findOneById = async (id: string) => {
  const people = await database.people.findByPk(id);
  if (!people) return null;

  const data = {
    id: people.toJSON().id,
    name: people.toJSON().name,
    last_name: people.toJSON().last_name,
    second_last_name: people.toJSON().second_last_name,
    phone: people.toJSON().phone,
    address: people.toJSON().address,
  };

  return {
    ...data,
  };
};

export const findAll = async () => {
  const peoples = await database.people.findAll();

  if (!peoples) {
    return [];
  }

  return peoples;
};

export const removeById = async (id: string) => {
  const peopleDeleted = await database.people.destroy({ where: { id } });
  return Boolean(peopleDeleted);
};

export const updateById = async (id: string, data: PeopleCreate) => {
  const [isUpdated] = await database.people.update(data, {
    where: { id },
  });

  if (!isUpdated) return null;
  return await findOneById(id);
};
