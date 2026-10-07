import mongoose from "mongoose";

const connectDb = async () => {
  try {
    console.log("URL:", process.env.MONGODB_URL);
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DataBase Connected");
  } catch (error) {
    console.log(`DataBase Error ${error}`);
  }
};

export default connectDb;
