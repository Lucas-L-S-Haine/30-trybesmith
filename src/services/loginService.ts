import User from '../models/user';
import { UserI, LoginI } from '../interfaces';
import { createToken } from '../auth';
import { loginValidate } from '../validations';

const createOne = async (loginData: LoginI) => {
  loginValidate(loginData);
  const { username, password } = loginData;
  return true;
};

export default {
  createOne,
};
