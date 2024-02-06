

import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect('mongodb://0.0.0.0:27017/todo');
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};


export default connectMongoDB;


