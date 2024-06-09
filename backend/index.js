import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import { router as rootRouter } from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

connectDB()
  .then(() => {
    app.listen(3000, () => {
      console.log(`server running on port 3000`);
    });
  })
  .catch((error) => {
    console.log("MongoDB failed to connect !!", error);
  });
