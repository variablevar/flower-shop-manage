import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the Category
interface Category {
  name: string;
}

// Define the interface for the Product document
export interface ProductDocument extends Document {
  id?: mongoose.Types.ObjectId;
  stock_keeper_unit: string;
  name: string;
  price: number;
  discount: number;
  new: boolean;
  rating: number;
  sale_count: number;
  category: Category[];
  tag: Category[];
  stock: number;
  image: string[];
  short_description: string;
  full_description: string;
  other: Record<string, string>;
}

// Define the Mongoose schema for Product
const productSchema = new Schema<ProductDocument>({
  _id: { type: Schema.Types.ObjectId },
  stock_keeper_unit: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, required: true },
  new: { type: Boolean, required: true },
  rating: { type: Number, required: true },
  sale_count: { type: Number, required: true },
  category: [{ name: { type: String } }],
  tag: [{ name: { type: String } }],
  stock: { type: Number, required: true },
  image: [{ type: String, required: true }],
  short_description: { type: String, required: true },
  full_description: { type: String, required: true },
  other: { type: Map, of: String }, // Using Map for dynamic fields
});

// Create and export the Product model
const Product = mongoose.model<ProductDocument>('Product', productSchema);

export default Product;
