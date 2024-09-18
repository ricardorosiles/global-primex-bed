import { Request, Response } from 'express';
import people from '../../constants/internalErrors/people';
import { throwNewError } from '../../helpers/throwNewError';

import { create, findByPhoneNumber } from '../../services/people';
import { isValidCreationPeopleBody } from '../../validators/people';

export const createPeople = async (req: Request, res: Response) => {
  isValidCreationPeopleBody(req.body);

  const foundPeople = await findByPhoneNumber(req.body.phone);

  if (foundPeople) {
    throwNewError(people.ALREADY_EXIST.detail, people.ALREADY_EXIST);
    return;
  }

  const peopleCreated = await create(req.body);

  res.status(201);
  res.json({
    data: peopleCreated,
  });
};
