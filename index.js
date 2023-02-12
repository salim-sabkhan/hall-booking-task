import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import hallsRoute from "./routes/halls.js"
import roomsRoute from "./routes/rooms.js"
import userssRoute from "./routes/userss.js"
const app = express();
dotenv.config();

const connect = async () => {
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected To Mongodb")
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongodb disconnected")
})

mongoose.connection.on("connected", () => {
    console.log("mongodb connected")
})

app.get("/userss", (request, response) => {
  response.send("Hello Everyone")
})

mongoose.set('strictQuery', false);

// middlewares

app.use(express.json())

app.use("/apis/auth", authRoute);
app.use("/apis/halls", hallsRoute);
app.use("/apis/rooms", roomsRoute);
app.use("/apis/userss", userssRoute);


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
     connect()
    console.log("Connected");
});