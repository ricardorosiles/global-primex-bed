type ArrayAllowedURL = Array<{
  url: string;
  method: string;
}>;

export const POST_PEOPLE = { url: '/v1/peoples', method: 'POST' };
export const GET_PEOPLES = { url: '/v1/peoples', method: 'GET' };
export const GET_BY_ID_PEOPLES = { url: '/v1/peoples/:id', method: 'GET' };
export const PATCH_PEOPLE = { url: '/v1/peoples/:id', method: 'PATCH' };
export const DELETE_PEOPLE = { url: '/v1/peoples/:id', method: 'DELETE' };

export const ALLOWED_URLS: ArrayAllowedURL = [];

export const APPLICABLE_API_KEY_URLS: ArrayAllowedURL = [];
