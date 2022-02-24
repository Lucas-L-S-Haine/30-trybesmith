import { Router, Request, Response } from 'express';
import service from '../services/userService';
import { UserI } from '../interfaces';

const route = Router();

const createOne = async (req: Request, res: Response) => {
  try {
    const user: UserI = req.body;
    const token = await service.createOne(user);
    return res.status(201).json({ token });
  } catch (err: any) {
    return res.status(err.status).send({ error: err.error });
  }
};

route.post('/', createOne);

export default route;
