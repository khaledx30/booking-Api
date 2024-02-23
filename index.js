import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";

const PORT = 8800;
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
    process.exit(1); // Exit the process with a non-zero exit code
  }
};

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json("something went wrong");
});

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (error) {
    console.error(`Error starting server: ${error.message}`);
  }
});

app.get("/", (req, res) => {
  res.send("hello from main");
});
