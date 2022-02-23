import { Request, Response, NextFunction } from 'express';

const notFoundHandler = (
  request: Request,
  response: Response,
  _next: NextFunction,
) => {
  const entityName = request.originalUrl.slice(1);
  const entity = entityName.slice(0, 1).toUpperCase()
    .concat(entityName.slice(1).toLowerCase());
  const message = `${entity} not found`;
  response.status(404).send(message);
};

export default notFoundHandler;
