import { Request, Response } from 'express';
import people from '../../constants/internalErrors/people';
import { throwNewError } from '../../helpers/throwNewError';
import { findOneById, findAll } from '../../services/people';

export const readOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  const peopleFound = await findOneById(id);
  if (!peopleFound) {
    throwNewError('people not found', people.NOT_FOUND);
    return;
  }

  res.json(peopleFound);
};

export const readAll = async (req: Request, res: Response) => {
  const itemFounded: any = await findAll();
  if (itemFounded.length === 0) {
    throwNewError('peoples not found', people.NOT_FOUND);
    return;
  }
  res.json(itemFounded);
};
