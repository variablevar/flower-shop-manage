import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the Blog document
export interface BlogDocument extends Document {
  image: string;
  category: string[];
  title: string;
  url: string;
  author: string;
  authorUrl: string;
}

// Define the Mongoose schema for Blog
const blogSchema = new Schema<BlogDocument>({
  image: { type: String, required: true },
  category: [{ type: String, required: true }],
  title: { type: String, required: true },
  url: { type: String, required: true },
  author: { type: String, required: true },
  authorUrl: { type: String, required: true },
});

// Create and export the Blog model
const Blog = mongoose.model<BlogDocument>('Blog', blogSchema);

export default Blog;
