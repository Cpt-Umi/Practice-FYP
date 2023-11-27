import mongoose from "mongoose";

const connectToDb = async () => {
  let cachedDb = null;
  if (cachedDb) {
    return cachedDb;
  }

  try {
    const db = await mongoose.connect(
      "mongodb+srv://Umair:blackGhost@cluster0.c6tj13p.mongodb.net/practice_fyp?retryWrites=true&w=majority"
    );

    cachedDb = db;
    return db.connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

export default connectToDb;
