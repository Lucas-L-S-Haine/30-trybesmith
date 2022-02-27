import { Router } from 'express';
import { validateToken } from '../auth';
import { createOne, readAll } from '../controllers/productController';

const productRouter = Router();

productRouter.use(validateToken);

productRouter
  .route('/')
  .get(readAll)
  .post(createOne);

export default productRouter;
