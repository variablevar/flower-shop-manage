import mongoose, { Document, Schema } from 'mongoose';

// Define a nested schema for the 'street' field
interface Street {
  line1: string;
  line2: number;
}

// Define the interface for the UserAddress document
export interface UserAddressDocument extends Document {
  firstName: string;
  lastName: string;
  country: string;
  street: Street;
  state: string;
  town: string;
  zip: number;
  phone: string;
  email: string;
}

// Define the Mongoose schema for UserAddress
const userAddressSchema = new Schema<UserAddressDocument>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  country: { type: String, required: true },
  street: {
    line1: { type: String, required: true },
    line2: { type: String, required: true },
  },
  state: { type: String, required: true },
  town: { type: String, required: true },
  zip: {
    type: Number,
    required: true,
    validate: {
      validator(v: number) {
        // You can implement zip code validation logic here
        // For simplicity, I'm assuming it's valid if it's a positive number
        return v > 0;
      },
      message: (props) => `${props.value} is not a valid zip code!`,
    },
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator(v: string) {
        // You can implement mobile number validation logic here
        // For simplicity, I'm assuming it's valid if it's a non-empty string
        return v.length > 0;
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator(v: string) {
        // You can implement email validation logic here
        // For simplicity, I'm assuming it's valid if it's a non-empty string
        return v.length > 0;
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
});

// Create and export the UserAddress model
const UserAddress = mongoose.model<UserAddressDocument>('Address', userAddressSchema);

export default UserAddress;
