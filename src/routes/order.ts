import { Router } from 'express';
import { createOne, readAll, readOne } from '../controllers/orderController';

const orderRouter = Router();

orderRouter
  .route('/')
  .get(readAll)
  .post(createOne);

orderRouter
  .route('/:id')
  .get(readOne);

export default orderRouter;
