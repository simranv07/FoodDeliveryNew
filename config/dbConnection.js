import mongoose from 'mongoose';

// Connection URI (Replace with your actual MongoDB Atlas or local string)
const uri = 'mongodb://127.0.0.1:27017/my_database';

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit if connection fails
  }
}

connectDB();
