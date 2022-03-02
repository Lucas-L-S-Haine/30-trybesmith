import { Response, NextFunction } from 'express';
import service from '../services/orderService';
import { OrderI, RequestI } from '../interfaces';
import { readToken } from '../auth';

export const createOne = async (req: RequestI, res: Response, next: NextFunction) => {
  try {
    const order: OrderI = req.body;
    const { products } = order;
    const { authorization: token } = req.headers;
    const { id: userId } = readToken(token);
    await service.createOne(order, userId);
    return res.status(201).json({ order: { userId, products } });
  } catch (err) {
    next(err);
  }
};

export const readAll = (req: RequestI, res: Response, next: NextFunction) => service
  .readAll()
  .then((orders: OrderI[]) => res.status(200).json(orders))
  .catch((err: unknown) => next(err));

export const readOne = (req: RequestI, res: Response, next: NextFunction) => service
  .readOne(Number(req.params.id))
  .then((order: OrderI) => res.status(200).json(order))
  .catch((err: unknown) => next(err));
