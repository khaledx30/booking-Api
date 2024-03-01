import express from "express";
import {
  createHotel,
  findAnddelete,
  findById,
  getAll,
  upDate,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

router.post("/", verifyAdmin, createHotel);

router.put("/:id", verifyAdmin, upDate);

router.delete("/:id", verifyAdmin, findAnddelete);

router.get("/:id", findById);

router.get("/", getAll);
export default router;
