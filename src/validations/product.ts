import { ProductI } from '../interfaces';
import HttpException from '../classes/httpException';
import { isValidName, isValidAmount } from '../utils/functions';

const validateName = (product: ProductI): void => {
  const error: HttpException = { status: 500, name: '', error: '', message: '' };
  if (!product.name) {
    error.status = 400;
    error.error = 'Name is required';
    throw error;
  }
  if (typeof product.name !== 'string') {
    error.status = 422;
    error.error = 'Name must be a string';
    throw error;
  }
  if (!isValidName(product.name)) {
    error.status = 422;
    error.error = 'Name must be longer than 2 characters';
    throw error;
  }
};

const validateAmount = (product: ProductI): void => {
  const error: HttpException = { status: 500, name: '', error: '', message: '' };
  if (!product.amount) {
    error.status = 400;
    error.error = 'Amount is required';
    throw error;
  }
  if (typeof product.amount !== 'string') {
    error.status = 422;
    error.error = 'Amount must be a string';
    throw error;
  }
  if (!isValidAmount(product.amount)) {
    error.status = 422;
    error.error = 'Amount must be longer than 2 characters';
    throw error;
  }
};

export default function orderValidate(product: ProductI): void {
  validateName(product);
  validateAmount(product);
}
