import Express from "express";
import Mongoose from "mongoose";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from './routes/user.js'

dotenv.config();
const app = Express();
const port = process.env.PORT || 3000;

// middleware
app.use('/api', userRoutes)

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// mongodb connection
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log(":: Connected to MongoDB Atlas ::"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log(`Running on port ${port}`));
