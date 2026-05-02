import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, index: true },
  sender: { type: String, enum: ['user', 'admin'], required: true },
  senderName: { type: String },
  text: { type: String, required: true },
  isRead: { type: Boolean, default: false }
}, { timestamps: true });

// Prevent mongoose from using the cached old schema during dev hot reloads
if (mongoose.models.Message) {
  delete mongoose.models.Message;
}

export const Message = mongoose.model('Message', MessageSchema);

