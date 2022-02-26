import Product from '../models/product';
import { ProductI } from '../interfaces';
import { productValidate } from '../validations';

const createOne = async (product: ProductI) => {
  productValidate(product);
  return true;
};

const readAll = async () => {
  const products = await Product.findAll();
  return products;
};

export default {
  createOne,
  readAll,
};
