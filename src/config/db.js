import mongoose from "mongoose";
import { mongoUri } from "./config.js";

export const connectDb = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("DB Connection error", error.message);
  }
};
