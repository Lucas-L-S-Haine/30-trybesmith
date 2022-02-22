import { Request, Response } from 'express';
import service from '../services/userService';

const createOne = async (req: Request, res: Response) => {
  try {
    const { username, classe, level, password } = req.body;
    const user: [string, string, number, string] = [username, classe, level, password];
    await service.createOne(user);
  } catch (err: any) {
    return res.status(err.status).send(err.message);
  }
};

export default {
  createOne,
};
