import express from "express";
import {
  createHotel,
  findAnddelete,
  findById,
  getAll,
  upDate,
} from "../controllers/hotel.js";
const router = express.Router();

router.post("/", createHotel);

router.put("/:id", upDate);

router.delete("/:id", findAnddelete);

router.get("/:id", findById);

router.get("/", getAll);
export default router;
