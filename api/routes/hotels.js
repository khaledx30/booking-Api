import express from "express";
import {
  createHotel,
  findAnddelete,
  findById,
  getAll,
  upDate,
  countByCity,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

router.post("/", verifyAdmin, createHotel);

router.put("/:id", verifyAdmin, upDate);

router.delete("/:id", verifyAdmin, findAnddelete);

router.get("/find/:id", findById);

router.get("/", getAll);
router.get("/countByCity", countByCity);
// router.get("/countByType", getAll);
export default router;
