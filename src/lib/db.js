import mongoose from 'mongoose';

// Schema
const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  liveSite: { type: String },
  githubClient: { type: String },
  githubServer: { type: String },
  technologies: { type: [String], default: [] },
  image: { type: String },
  order: { type: Number, default: 0 },
}, { timestamps: true });

export const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);

// Contact Message Schema
const MessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, enum: ['unread', 'read'], default: 'unread' },
}, { timestamps: true });

export const Message = mongoose.models.Message || mongoose.model('Message', MessageSchema);

// Connection cache
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error('❌ MONGODB_URI is not defined in .env.local');
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    console.log('🔌 Connecting to MongoDB...');
    cached.promise = mongoose
      .connect(MONGODB_URI, { bufferCommands: false })
      .then((m) => {
        console.log('✅ MongoDB Connected:', m.connection.host);
        return m;
      })
      .catch((err) => {
        console.error('❌ MongoDB Connection Error:', err.message);
        cached.promise = null;
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
