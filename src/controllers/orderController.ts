import { Request, Response, NextFunction } from 'express';
import service from '../services/orderService';
import { OrderI } from '../interfaces';

export const createOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order: OrderI = req.body;
    const token = await service.createOne(order);
    return res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

export const readAll = (req: Request, res: Response, next: NextFunction) => service
  .readAll()
  .then((orders: OrderI[]) => res.status(200).json(orders))
  .catch((err: unknown) => next(err));

export const readOne = (req: Request, res: Response, next: NextFunction) => service
  .readOne(Number(req.params.id))
  .then((order: OrderI) => res.status(200).json(order))
  .catch((err: unknown) => next(err));
