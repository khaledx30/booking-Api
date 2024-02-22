import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello this auth End point....");
});

router.get("/register", (req, res) => {
  res.send("hello this register End point....");
});

export default router;
