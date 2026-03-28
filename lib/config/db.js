import mongoose from "mongoose";

export const ConnectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return; // already connected
  }
  console.log("ENV:", process.env.MONGODB_URI);
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("DB Connected");
};