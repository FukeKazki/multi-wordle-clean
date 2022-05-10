import express from "express";
import { router } from "@/router";
import * as functions from "firebase-functions";
import cors from "cors";
import { RuntimeOptions } from "firebase-functions";

const app = express();

app.use(cors());
app.use(router);

const runtimeOpts: RuntimeOptions = {
  timeoutSeconds: 540,
  memory: "1GB"
};

export const wordle = functions
  .region("asia-northeast1")
  .runWith(runtimeOpts)
  .https.onRequest(app);
