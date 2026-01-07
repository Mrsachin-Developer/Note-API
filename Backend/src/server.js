import express from "express";
import dotenv from "dotenv";
import notesRoutes from "./routes/note.routes.js";
dotenv.config();
import connectDB from "./db/db.js";
const app = express();
app.use(express.json());

app.use("/api/v1", notesRoutes);
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running at port:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed", err);
  });
