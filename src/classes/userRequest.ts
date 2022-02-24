import { Request } from 'express';
import UserHeaders from './headers';

export default class UserRequest extends Request {
  user: string;

  headers: UserHeaders;

  constructor(user: string, headers: UserHeaders) {
    super(user);

    this.user = user;
    this.headers = headers;
  }
}
