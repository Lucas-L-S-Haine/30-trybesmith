import { Router } from 'express';
import { createOne } from '../controllers/loginController';

const loginRouter = Router();

loginRouter
  .route('/')
  .post(createOne);

export default loginRouter;
