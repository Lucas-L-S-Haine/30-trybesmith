import { Request, Response, NextFunction } from 'express';
import HttpException from '../classes/httpException';

const errorHandler = (
  error: HttpException,
  request: Request,
  response: Response,
  _next: NextFunction,
) => {
  const status = error.statusCode || error.status || 500;
  response.status(status).send(error);
};

export default errorHandler;
