import Order from '../models/order';
import { OrderI } from '../interfaces';
import { createToken } from '../auth';
import { orderValidate } from '../validations';

const createOne = async (order: OrderI) => {
  orderValidate(order);
  return true;
};

const readAll = async () => {
  const orders = await Order.findAll();
  return orders;
};

const readOne = async (id: number) => {
  const order = await Order.findByPk(id);
  return order;
};

export default {
  createOne,
  readAll,
  readOne,
};
