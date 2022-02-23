import { Response, NextFunction } from 'express';
import { sign, decode, verify } from 'jsonwebtoken';
import HttpException from '../classes/httpException';
import UserRequest from '../classes/userRequest';

const JWT_SECRET = 'SA9D8JASD98HYAF9SFN89ash008yh08H808yh9SC8GH9ASCA987C';

export function newToken(user: {
  username: string,
  classe: string,
  level: number,
  password: string,
}) {
  return sign(user, JWT_SECRET);
}

export function readToken(token: string) {
  return decode(token);
}

export function validateToken(req: UserRequest, _res: Response, next: NextFunction) {
  const token: string = req.headers.authorization;
  if (!token) {
    const error: HttpException = {
      name: 'authentication error',
      status: 401,
      message: 'Token not found',
      error: 'unauthorized',
    };
    throw error;
  }
  try {
    verify(token, JWT_SECRET);
  } catch (err) {
    const payload = verify(token, JWT_SECRET);
    req.user = `${payload}`;
    next();
  }
}
