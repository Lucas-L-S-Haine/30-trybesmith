import User from '../models/user';

const createOne = async (user: [string, string, number, string]) => {
  await User.create(user);
};

export default {
  createOne,
};
