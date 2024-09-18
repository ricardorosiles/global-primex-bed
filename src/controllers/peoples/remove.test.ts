import { Request, Response } from 'express';
import { remove } from './remove';

const removeByIdMock = jest.fn();
const throwNewError = jest.fn();

jest.mock('../../services/people', () => ({
  removeById: () => removeByIdMock(),
}));

jest.mock('../../helpers/throwNewError', () => ({
  throwNewError: (error: string) => throwNewError(error),
}));

describe('testing people remove controller', () => {
  it('should return a true for delete success', async () => {
    const req: any = {
      params: {
        id: 1,
      },
    };
    const res: Partial<Response> = {
      json: jest.fn(),
    };

    removeByIdMock.mockResolvedValue(true);
    await remove(req as Request, res as Response);
    expect(throwNewError).toHaveBeenCalledTimes(0);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({
      data: true,
    });
  });

  it('should throw delete error', async () => {
    const req: any = {
      params: {
        id: 1,
      },
    };
    const res: Partial<Response> = {
      json: jest.fn(),
    };

    removeByIdMock.mockResolvedValue(false);
    await remove(req as Request, res as Response);
    expect(res.json).toHaveBeenCalledTimes(0);
    expect(throwNewError).toHaveBeenCalledTimes(1);
    expect(throwNewError).toHaveBeenCalledWith('people not found');
  });
});
