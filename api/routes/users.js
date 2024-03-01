import express from "express";
import {
  upDate,
  findAnddelete,
  findById,
  getAll,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// // Routes for authentication and authorization
// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hello user, you are logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello user, you are logged in and you can delete your account");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   console.log(req.user.isAdmin);
//   res.send("Hello admin, you are logged in and you can delete all accounts");
// });

// CRUD routes
router.put("/:id", verifyUser, upDate); // Update user
router.delete("/:id", verifyUser, findAnddelete); // Delete user
router.get("/:id", verifyUser, findById); // Get user by ID
router.get("/", verifyAdmin, getAll); // Get all users

export default router;
