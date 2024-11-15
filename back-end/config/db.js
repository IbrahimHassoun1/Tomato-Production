import mongoose from "mongoose";

export const connectDb = async () => {
    const connectionString = "mongodb://ihassoun1990:King%40Raptor_1@cluster0-shard-00-00.nddzf.mongodb.net:27017,cluster0-shard-00-01.nddzf.mongodb.net:27017,cluster0-shard-00-02.nddzf.mongodb.net:27017/beiruti?ssl=true&replicaSet=atlas-syt0vt-shard-0&authSource=admin&retryWrites=true&w=majority";
    
    try {
        await mongoose.connect(connectionString);
        console.log("Connected to Atlas");
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
    }
};
