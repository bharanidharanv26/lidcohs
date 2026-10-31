import cors from "cors";
import express from "express";
import { env } from "./config/env.js";
import { errorHandler } from "./middleware/error-handler.js";
import { apiRouter } from "./routes/api.js";
import { healthRouter } from "./routes/health.js";

export const app = express();

app.disable("x-powered-by");
app.use(cors({ origin: env.frontendUrl }));
app.use(express.json({ limit: "1mb" }));
app.use(healthRouter);
app.use("/api", apiRouter);
app.use(errorHandler);