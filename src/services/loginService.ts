import User from '../models/user';
import { UserI, LoginI } from '../interfaces';
import { createToken } from '../auth';
import { loginValidate } from '../validations';

const createOne = async (user: LoginI) => {
  loginValidate(user);
  const token = createToken(user);
  const { username, classe, level, password } = user;
  await User.create([username, classe, level, password]);
  return token;
};

export default {
  createOne,
};
