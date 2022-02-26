import { Router } from 'express';
import { createOne, readAll } from '../controllers/userController';

const userRouter = Router();

userRouter
  .route('/')
  .get(readAll)
  .post(createOne);

export default userRouter;
