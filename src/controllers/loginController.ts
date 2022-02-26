import { Request, Response, NextFunction } from 'express';
import service from '../services/loginService';
import { LoginI } from '../interfaces';

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const loginData: LoginI = req.body;
    const token = await service.createOne(loginData);
    return res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

export default login;
