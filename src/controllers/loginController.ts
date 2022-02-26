import { Request, Response, NextFunction } from 'express';
import service from '../services/loginService';
import { LoginI } from '../interfaces';

const login = (req: Request, res: Response, next: NextFunction) => service
  .login(req.body as LoginI)
  .then((token) => res.status(200).json({ token }))
  .catch((err: unknown) => next(err));

export default login;
