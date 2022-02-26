import User from '../models/user';
import { UserI } from '../interfaces';
import { createToken } from '../auth';
import { userValidate } from '../validations';

const createOne = async (user: UserI) => {
  userValidate(user);
  const { username, classe, level, password } = user;
  await User.create([username, classe, level, password]);
  const userData = await User.findOne([username, password]);
  const { id } = userData;
  const token = createToken({ id, username, password });
  return token;
};

const readAll = async () => {
  const users = await User.findAll();
  return users;
};

export default {
  createOne,
  readAll,
};
