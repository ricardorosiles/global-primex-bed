import { Request, Response } from 'express';
import { readOne, readAll } from './read';

const findAll = jest.fn();
const findOneById = jest.fn();
const throwNewError = jest.fn();

jest.mock('../../services/people', () => ({
  findOneById: () => findOneById(),
  findAll: () => findAll(),
}));

jest.mock('../../helpers/throwNewError', () => ({
  throwNewError: (error: string) => throwNewError(error),
}));

beforeEach(() => jest.resetAllMocks());

describe('get controller people', () => {
  it('find one with parameter', async () => {
    const data = {
      id: 1,
      name: 'ricardo',
    };
    const req: Partial<Request> = {
      params: {
        id: '1',
      },
    };
    const res: Partial<Response> = {
      json: jest.fn(),
    };

    findOneById.mockResolvedValueOnce(data);
    await readOne(req as Request, res as Response);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({
      data: data,
    });
  });

  it('should throw not found one people', async () => {
    const req: any = {
      params: {
        id: 1,
      },
    };
    const res: Partial<Response> = {
      json: jest.fn(),
    };

    findOneById.mockResolvedValue(null);
    await readOne(req as Request, res as Response);
    expect(res.json).toHaveBeenCalledTimes(0);
    expect(throwNewError).toHaveBeenCalledTimes(1);
    expect(throwNewError).toHaveBeenCalledWith('people not found');
  });

  it('should return peoples', async () => {
    const peoples = {
      data: [
        {
          id: 1,
          name: 'ricardo',
        },
        {
          id: 2,
          name: 'rosiles',
        },
      ],
    };
    const req: any = {
      query: {
        page: '1',
        page_size: '10',
      },
    };
    const res: Partial<Response> = {
      json: jest.fn(),
    };

    findAll.mockResolvedValueOnce(peoples);
    await readAll(req as Request, res as Response);
    expect(throwNewError).toHaveBeenCalledTimes(0);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(peoples);
  });
});
