import { Request, Response } from 'express';
import { update } from './update';

const updateByIdMock = jest.fn();
const throwNewError = jest.fn();

jest.mock('../../services/people', () => ({
  updateById: () => updateByIdMock(),
}));

jest.mock('../../helpers/throwNewError', () => ({
  throwNewError: (error: string) => throwNewError(error),
}));

const body = {
  name: 'ricardo ',
};

describe('testing people update controller', () => {
  it('should update a people', async () => {
    const req: Partial<Request> = {
      body,
      params: {
        id: '1',
      },
    };
    const res: Partial<Response> = {
      json: jest.fn(),
    };

    updateByIdMock.mockResolvedValue(true);
    await update(req as Request, res as Response);
    expect(throwNewError).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({
      data: true,
    });
  });

  it('should throw update error', async () => {
    const req: any = {
      body,
      params: {
        id: 1,
      },
    };
    const res: Partial<Response> = {
      json: jest.fn(),
    };

    updateByIdMock.mockResolvedValue(false);
    await update(req as Request, res as Response);
    expect(res.json).toHaveBeenCalledTimes(0);
    expect(throwNewError).toHaveBeenCalledTimes(3);
    expect(throwNewError).toHaveBeenCalledWith('people not found');
  });
});
