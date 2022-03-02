import Order from '../models/order';
import Product from '../models/product';
import { OrderI } from '../interfaces';
import { orderValidate } from '../validations';
import HttpException from '../classes/httpException';

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
  const data = await Order.findByPk(id);
  if (data.length === 0) {
    const error: HttpException = { status: 404, name: '', error: 'Order not found', message: '' };
    throw error;
  }
  const products = data.map(({ products: prod }) => prod);
  const { userId } = data[0];
  return { id, userId, products };
};

export default {
  createOne,
  readAll,
  readOne,
};
