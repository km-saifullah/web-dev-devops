import express from "express";
import app from "./app.js";
import { mongoUri, serverPort } from "./config/config.js";
import { connectDb } from "./config/db.js";

// connect the DB
connectDb();

app.listen(serverPort, "0.0.0.0", () =>
  console.log(`http://localhost:${serverPort}`),
);
