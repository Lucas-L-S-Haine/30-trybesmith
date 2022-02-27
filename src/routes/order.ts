import { Router } from 'express';
import { validateToken } from '../auth';
import { createOne, readAll, readOne } from '../controllers/orderController';

const orderRouter = Router();

orderRouter.use(validateToken);

orderRouter
  .route('/')
  .get(readAll)
  .post(createOne);

orderRouter
  .route('/:id')
  .get(readOne);

export default orderRouter;
