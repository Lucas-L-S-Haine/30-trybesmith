import { Router } from 'express';
import { createOne, readAll } from '../controllers/productController';

const productRouter = Router();

productRouter
  .route('/')
  .get(readAll)
  .post(createOne);

export default productRouter;
