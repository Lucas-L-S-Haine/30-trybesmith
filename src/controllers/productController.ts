import { Response, NextFunction } from 'express';
import service from '../services/productService';
import { ProductI, RequestI } from '../interfaces';

export const createOne = async (req: RequestI, res: Response, next: NextFunction) => {
  try {
    const product: ProductI = req.body;
    const item = await service.createOne(product);
    return res.status(201).json({ item });
  } catch (err) {
    next(err);
  }
};

export const readAll = (req: RequestI, res: Response, next: NextFunction) => service
  .readAll()
  .then((products: ProductI[]) => res.status(200).json(products))
  .catch((err: unknown) => next(err));
