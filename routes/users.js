import {
  upDate,
  findAnddelete,
  findById,
  getAll,
} from "../controllers/user.js";
import express from "express";

const router = express.Router();

router.put("/:id", upDate);

router.delete("/:id", findAnddelete);

router.get("/:id", findById);

router.get("/", getAll);

export default router;
