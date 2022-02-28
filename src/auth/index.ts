import { Response, NextFunction } from 'express';
import { sign, decode, verify } from 'jsonwebtoken';
import HttpException from '../classes/httpException';
import { UserI, LoginI, RequestI, PayloadI } from '../interfaces';

const JWT_SECRET = 'SA9D8JASD98HYAF9SFN89ash008yh08H808yh9SC8GH9ASCA987C';

const verifyTokenPresence = (token: string | undefined): void => {
  if (!token) {
    const error: HttpException = {
      name: 'authentication error',
      status: 401,
      message: 'Token not found',
      error: 'Token not found',
    };
    throw error;
  }
};

const verifyTokenValidity = (authorization: string | undefined): string => {
  try {
    const token = authorization || '';
    return `${verify(token, JWT_SECRET)}`;
  } catch (err) {
    const error: HttpException = {
      name: 'authentication error',
      status: 401,
      message: 'Expired or invalid token',
      error: 'Invalid token',
    };
    throw error;
  }
};

export function createToken(userData: UserI | LoginI): string {
  const { id, username } = userData;
  return sign({ id, username }, JWT_SECRET);
}

export function readToken(authorization: string | undefined): PayloadI {
  const token = authorization || '';
  return decode(token) as PayloadI;
}

export function validateToken(req: RequestI, _res: Response, next: NextFunction): void {
  const { authorization: token } = req.headers;
  verifyTokenPresence(token);
  const payload = verifyTokenValidity(token);
  req.user = payload;
  next();
}
