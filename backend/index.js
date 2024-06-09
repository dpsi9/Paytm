import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import { router as rootRouter } from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

const PORT = process.env.PORT;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB failed to connect !!", error);
  });
