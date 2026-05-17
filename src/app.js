import express from "express";
import bookmarkRouter from "./routes/bookmark.routes.js";

const app = express();

// default middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// bookmark routes
app.use("/", bookmarkRouter);

export default app;
