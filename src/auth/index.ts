import { Response, NextFunction } from 'express';
import { sign, decode, verify } from 'jsonwebtoken';
import HttpException from '../classes/httpException';
import UserRequest from '../classes/userRequest';
import { UserI } from '../interfaces';

const JWT_SECRET = 'SA9D8JASD98HYAF9SFN89ash008yh08H808yh9SC8GH9ASCA987C';

const verifyTokenPresence = (token: string): void => {
  if (!token) {
    const error: HttpException = {
      name: 'authentication error',
      status: 401,
      message: 'Token not found',
      error: 'unauthorized',
    };
    throw error;
  }
};

const verifyTokenValidity = (token: string): string => {
  try {
    return `${verify(token, JWT_SECRET)}`;
  } catch (err) {
    const error: HttpException = {
      name: 'authentication error',
      status: 401,
      message: 'Expired or invalid token',
      error: 'unauthorized',
    };
    throw error;
  }
};

export function createToken(user: UserI) {
  return sign(user, JWT_SECRET);
}

export function readToken(token: string) {
  return decode(token);
}

export function validateToken(req: UserRequest, _res: Response, next: NextFunction) {
  const token: string = req.headers.authorization;
  verifyTokenPresence(token);
  const payload = verifyTokenValidity(token);
  req.user = payload;
  next();
}
