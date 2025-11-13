import { configDotenv } from "dotenv";
import express from "express";
import cors from "cors";
import pollRoutes from "./api/routes/poll.js";
configDotenv();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Polls Service is running");
});
app.use("/api", pollRoutes);

app.listen(PORT, () => {
  console.log(`[Polls Service] Running on port: ${PORT}`);
});
