import express from 'express';
import { productController } from './product.controllers';
const router = express.Router();

// create New Prodcut
router.post('/', productController.createNewProductInDB);
// get All Product
router.get('/', productController.getAllProduct);
export const productRouter = router;
