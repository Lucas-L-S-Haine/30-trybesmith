import express, { json, Request, Response } from 'express';
import user from './controllers/userController';
import errorHandler from './middlewares/errorMiddleware';
import notFoundHandler from './middlewares/notFoundMiddleware';

const app = express();

app.get('/', (_req: Request, res: Response) => (res.status(200).send('Online!')));

app.use(json());
app.use('/users', user);

app.use(errorHandler);
app.use(notFoundHandler);

export default app;
