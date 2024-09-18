import express from 'express';

import { createPeople } from '../controllers/peoples/create';
import { readAll, readOne } from '../controllers/peoples/read';
import { update } from '../controllers/peoples/update';
import { remove } from '../controllers/peoples/remove';

import { catchWrapper } from '../helpers/catchWrapper';
import {
  GET_BY_ID_PEOPLES,
  GET_PEOPLES,
  POST_PEOPLE,
  PATCH_PEOPLE,
  DELETE_PEOPLE,
} from '../constants/routesName';

export const people = express.Router();

people.post(POST_PEOPLE.url, catchWrapper(createPeople));
people.get(GET_PEOPLES.url, catchWrapper(readAll));
people.get(GET_BY_ID_PEOPLES.url, catchWrapper(readOne));
people.patch(PATCH_PEOPLE.url, catchWrapper(update));
people.delete(DELETE_PEOPLE.url, catchWrapper(remove));
