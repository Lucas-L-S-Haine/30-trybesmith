import { Router, Request, Response, NextFunction } from 'express';
import service from '../services/userService';
import { UserI } from '../interfaces';

const route = Router();

const createOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user: UserI = req.body;
    const token = await service.createOne(user);
    return res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

const readAll = (req: Request, res: Response, next: NextFunction) => service
  .readAll()
  .then((users: UserI[]) => res.status(200).json(users))
  .catch((err: unknown) => next(err));

route.post('/', createOne);
route.get('/', readAll);

export default route;
