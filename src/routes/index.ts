import { Router } from 'express';
import { validateToken } from '../auth';
import userRouter from './user';
import loginRouter from './login';
import productRouter from './product';
import orderRouter from './order';

const router = Router();

router.use('/users', userRouter);
router.use('/login', loginRouter);
router.use(validateToken);
router.use('/products', productRouter);
router.use('/orders', orderRouter);

export default router;
