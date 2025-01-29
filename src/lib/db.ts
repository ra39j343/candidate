import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/candidate-db';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

const options = {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
};

export async function connectDB() {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log('Using existing MongoDB connection');
      return mongoose.connection;
    }

    await mongoose.connect(MONGODB_URI, options);
    console.log('Connected to MongoDB Docker container');
    
    mongoose.connection.on('error', err => {
      console.error('MongoDB connection error:', err);
    });

    return mongoose.connection;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
  try {
    await mongoose.connection.close();
    console.log('MongoDB connection closed through app termination');
    process.exit(0);
  } catch (error) {
    console.error('Error during MongoDB shutdown:', error);
    process.exit(1);
  }
}); 