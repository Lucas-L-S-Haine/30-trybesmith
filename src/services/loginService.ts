import User from '../models/user';
import { LoginI } from '../interfaces';
import { createToken } from '../auth';
import { loginValidate } from '../validations';
import HttpException from '../classes/httpException';

const createOne = async (loginData: LoginI) => {
  loginValidate(loginData);
  const { username, password } = loginData;
  const userData = await User.findOne([username, password]);
  if (!userData) {
    const error: HttpException = { status: 500, name: '', error: '', message: '' };
    error.status = 401;
    error.error = 'Username or password invalid';
    throw error;
  }
  const { id } = userData;
  const token = createToken({ id, username, password });
  return token;
};

export default {
  createOne,
};
