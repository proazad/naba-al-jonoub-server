import { Product } from './product.interface';
import ProductModel from './product.models';

const createNewProduct = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};



export const productServices = { createNewProduct };