import mongoose, { Document, Schema } from 'mongoose';

interface OrderItem {
  product: mongoose.Types.ObjectId;
  quantity: number;
}

interface Order extends Document {
  items: OrderItem[];
  user: mongoose.Types.ObjectId;
}

const OrderItemSchema = new Schema<OrderItem>({
  product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
});

const OrderSchema = new Schema<Order>({
  items: { type: [OrderItemSchema], required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const OrderModel = mongoose.model<Order>('Order', OrderSchema);

export { Order, OrderItem, OrderModel };
