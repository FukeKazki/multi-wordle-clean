import express from "express";
import { handler } from "@/handler/lineHandler";

export const router = express.Router();

router.get("/", async (req, res) => {
  res.send("hello world");
});

router.post("/webhook/linebot", async (req, res) => {
  Promise.all(req.body.events.map(handler))
    .then(() => {
      res.status(200).end();
    })
    .catch(() => {
      res.status(500).end();
    });
});
