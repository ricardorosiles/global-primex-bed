import httpStatus from '../httpStatus';

export default {
  CREATION: {
    httpCode: httpStatus.BAD_REQUEST,
    code: 'bad_user_request',
    detail: 'The correct data was not sent to create a people',
  },
  ALREADY_EXIST: {
    httpCode: httpStatus.CONFLICT,
    code: 'people_duplicated',
    detail: 'people already exists',
  },
  NOT_FOUND: {
    httpCode: httpStatus.NOT_FOUND,
    code: 'people_not_found',
    detail: 'There is no people with the provided auth token',
  },
  NOT_FOUND_ID: {
    httpCode: httpStatus.NOT_FOUND,
    code: 'people_id_not_found',
    detail: 'There is no people with the provided id',
  },
  BLOCKED_CREATION: {
    httpCode: httpStatus.CONFLICT,
    code: 'blocked_people_creation',
    detail: 'people could not be created',
  },
  NOT_FOUND_ALERTS: {
    httpCode: httpStatus.NOT_FOUND,
    code: 'client_alerts_not_found',
    detail: 'There are not client alerts',
  },
};
