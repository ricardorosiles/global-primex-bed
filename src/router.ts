import express from 'express';
import { people } from './routes/people';

export const router = express.Router();

router.use(people);
