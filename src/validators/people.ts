import people from '../constants/internalErrors/people';
import { generateValidatorFunc } from '../helpers/validator';
import * as verifier from './verifier';

const peopleCreationBodySchema = verifier.typeMainObjectStrict({
  name: verifier.typeStringMin(2),
  last_name: verifier.typeStringMin(2),
  second_last_name: verifier.typeStringMin(2),
  address: verifier.typeString(),
  phone: verifier.typeString(),
});

const peopleUpdatedBodySchema = verifier.typeMainObjectStrict({
  name: verifier.typeStringMin(2),
  last_name: verifier.typeStringMin(2),
  second_last_name: verifier.typeStringMin(2),
  address: verifier.typeString(),
  phone: verifier.typeString(),
});

export const isValidCreationPeopleBody = generateValidatorFunc(
  peopleCreationBodySchema,
  people.CREATION,
);
export const isValidUpdatedPeople = generateValidatorFunc(peopleUpdatedBodySchema, people.CREATION);
