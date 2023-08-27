import express from "express";

import {
  getUser,
  getUserConnections,
  addRemoveConnection,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// READ OPERATION
router.get("/:id", verifyToken, getUser);
router.get("/:id/connections", verifyToken, getUserConnections);

// UPDATE OPERATION
router.patch("/:id/connectionId", verifyToken, addRemoveConnection);

export default router;