import mongoose from 'mongoose';
import { MONGO_PUBLIC_URL, MONGO_URL } from './variables.js';

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL || MONGO_PUBLIC_URL)
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}