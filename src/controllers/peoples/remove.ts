import { Request, Response } from 'express';
import people from '../../constants/internalErrors/people';
import { throwNewError } from '../../helpers/throwNewError';
import { removeById } from '../../services/people';

export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  const removedPeople = await removeById(id);

  if (!removedPeople) {
    throwNewError('people not found', people.NOT_FOUND);
    return;
  }
  res.json({
    data: removedPeople,
  });
};
