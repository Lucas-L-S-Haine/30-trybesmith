import { OrderI } from '../interfaces';
import HttpException from '../classes/httpException';

const validateProducts = (order: OrderI): void => {
  const error: HttpException = { status: 500, name: '', error: '', message: '' };
  if (!order.products) {
    error.status = 400;
    error.error = 'Products is required';
    throw error;
  }
  if (typeof order.products !== 'object' || order.products.some((num) => typeof num !== 'number')) {
    error.status = 422;
    error.error = 'Products must be an array of numbers';
    throw error;
  }
  if (order.products.length === 0) {
    error.status = 422;
    error.error = 'Products can\'t be empty';
    throw error;
  }
};

export default function orderValidate(order: OrderI): void {
  validateProducts(order);
}
