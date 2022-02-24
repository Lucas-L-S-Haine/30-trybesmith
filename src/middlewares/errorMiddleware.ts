import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (
  err,
  request,
  response,
  _next,
) => {
  const status = err.status || 500;
  const error = err.error || 'Internal error';
  response.status(status).json({ error });
};

export default errorHandler;
