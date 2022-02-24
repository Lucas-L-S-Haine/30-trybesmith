import User from '../models/user';
import { UserI } from '../interfaces';
import { createToken } from '../auth';

const createOne = async (user: UserI) => {
  const token = createToken(user);
  const { username, classe, level, password } = user;
  await User.create([username, classe, level, password]);
  return token;
};

export default {
  createOne,
};
