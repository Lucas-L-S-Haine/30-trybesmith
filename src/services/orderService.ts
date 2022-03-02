import Order from '../models/order';
import Product from '../models/product';
import { OrderI } from '../interfaces';
import { orderValidate } from '../validations';

const createOne = async (order: OrderI, userId: number): Promise<void> => {
  orderValidate(order);
  const { products } = order;
  await Order.create([userId]);
  const { id: orderId } = await Order.findLast() || 0;
  await Product.update(orderId as number, products);
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
