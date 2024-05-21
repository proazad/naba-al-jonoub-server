import { Request, Response } from 'express';
import { productServices } from './product.services';
// Create New Product In DB
const createNewProductInDB = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await productServices.createNewProduct(product);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      data: error,
    });
  }
};


export const productController = {
  createNewProductInDB,
};
