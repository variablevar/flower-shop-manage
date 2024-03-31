import mongoose, { Document, Schema } from 'mongoose';

export interface UserDocument extends Document {
  id?: mongoose.Types.ObjectId;
  username?: string;
  email: string;
  first_name?: string;
  last_name?: string;
  address?: mongoose.Types.ObjectId;
  password?: string;
}

const userSchema = new Schema<UserDocument>({
  _id: { type: Schema.Types.ObjectId },
  username: { type: String, sparse: true },
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
  first_name: { type: String, sparse: true },
  last_name: { type: String, sparse: true },
  address: { type: Schema.Types.ObjectId, ref: 'Address' },
  password: { type: String, select: false }, // Assuming passwords should not be retrieved by default
});

const User = mongoose.model<UserDocument>('User', userSchema);

export default User;
