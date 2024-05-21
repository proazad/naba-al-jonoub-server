import express from 'express';
import { productController } from './product.controllers';
const router = express.Router();

// create New Prodcut
router.post('/', productController.createNewProductInDB);
// get All Product
export const productRouter = router;
