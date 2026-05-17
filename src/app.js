import express from "express";
import bookmarkRouter from "./routes/bookmark.routes.js";

const app = express();

// default middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// server health check
app.get("/health", async (req, res) => {
  try {
    return res.status(200).json({
      status: true,
      message: " Server is running perfectly...!",
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: "Server is not running",
      data: error.message,
    });
  }
});

// bookmark routes
app.use("/", bookmarkRouter);

export default app;
