import { Request, Response } from 'express';
import people from '../../constants/internalErrors/people';
import { throwNewError } from '../../helpers/throwNewError';
import { updateById } from '../../services/people';
import { isValidCreationPeopleBody } from '../../validators/people';

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  await isValidCreationPeopleBody(req.body);
  const peopleUpdated = await updateById(id, req.body);
  if (!peopleUpdated) {
    throwNewError('people not found', people.NOT_FOUND);
    return;
  }
  res.json({
    data: peopleUpdated,
  });
};
