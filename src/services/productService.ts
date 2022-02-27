import Product from '../models/product';
import { ProductI } from '../interfaces';
import { productValidate } from '../validations';

const createOne = async (request: ProductI) => {
  productValidate(request);
  const { name, amount } = request;
  await Product.create([name, amount]);
  const product = await Product.findOne([name]);
  return product;
};

const readAll = async () => {
  const products = await Product.findAll();
  return products;
};

export default {
  createOne,
  readAll,
};
