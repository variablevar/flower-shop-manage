import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the Category
// Define the TypeScript enum for Category
enum Category {
  Flower = 'flower',
  Plant = 'plant',
}

// Define the interface for the Product document
export interface ProductDocument extends Document {
  stockKeeperUnit: string;
  name: string;
  price: number;
  discount: number;
  new: boolean;
  rating: number;
  saleCount: number;
  category: Category[];
  tag: Category[];
  stock: number;
  image: Buffer[];
  shortDescription: string;
  fullDescription: string;
  other: Record<string, string>;
}

// Define the Mongoose schema for Product
const productSchema = new Schema<ProductDocument>({
  stockKeeperUnit: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, required: true },
  new: { type: Boolean, required: true },
  rating: { type: Number, required: true },
  saleCount: { type: Number, required: true },
  category: [
    {
      type: String,
      required: true,
      enum: Object.values(Category), // Allowed values are all enum values
    },
  ],
  tag: [
    {
      type: String,
      required: true,
      enum: Object.values(Category), // Allowed values are all enum values
    },
  ],
  stock: { type: Number, required: true },
  image: [{ type: Buffer, required: true }],
  shortDescription: { type: String, required: true },
  fullDescription: { type: String, required: true },
  other: { type: Map, of: String }, // Using Map for dynamic fields
});

// Create and export the Product model
const Product = mongoose.model<ProductDocument>('Product', productSchema);

export default Product;
