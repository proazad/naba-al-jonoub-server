import { Schema, model } from 'mongoose';
import { Inventory, Product, Variants } from './product.interface';
const productVariantsSchema = new Schema<Variants>({
  type: {
    type: String,
    required: [true, 'Product Variant Typs is Required'],
  },
  value: {
    type: String,
    required: [true, 'Product Variant Value is Required'],
  },
});
const InventorySchema = new Schema<Inventory>({
  quantity: {
    type: Number,
    required: [true, 'Product Quantity is Required'],
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});
const productSchema = new Schema<Product>({
  name: {
    type: String,
    required: [true, 'Product name is Required'],
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'Product Description is Required'],
  },
  price: {
    type: Number,
    required: [true, 'Product name is Required'],
  },
  category: {
    type: String,
    required: [true, 'Product Category is Required'],
  },
  tags: {
    type: [String],
    required: [true, 'Product Tags is Required'],
  },
  variants: {
    type: [productVariantsSchema],
    required: [true, 'Product Variants is Required'],
  },
  inventory: {
    type: InventorySchema,
    required: true,
  },
});

const ProductModel = model<Product>('Product', productSchema);
export default ProductModel;
