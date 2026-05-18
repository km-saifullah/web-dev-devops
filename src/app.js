import express from "express";
import bookmarkRouter from "./routes/bookmark.routes.js";
import {
  client,
  httpRequestDurationMicroseconds,
} from "./middlewares/metricsMiddleware.js";

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

// add metrics route
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);

  res.end(await client.register.metrics());
});

app.use((req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;

    httpRequestDurationMicroseconds
      .labels(req.method, req.route ? req.route.path : req.path, res.statusCode)
      .observe(duration);
  });

  next();
});

export default app;
