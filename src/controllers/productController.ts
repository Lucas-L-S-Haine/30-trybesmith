import { Request, Response, NextFunction } from 'express';
import service from '../services/productService';
import { ProductI } from '../interfaces';

export const createOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product: ProductI = req.body;
    const token = await service.createOne(product);
    return res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

export const readAll = (req: Request, res: Response, next: NextFunction) => service
  .readAll()
  .then((products: ProductI[]) => res.status(200).json(products))
  .catch((err: unknown) => next(err));
