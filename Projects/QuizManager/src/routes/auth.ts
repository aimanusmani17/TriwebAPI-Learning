// Redirect request to Particular method on Controller
import express from "express";
import { registerUser, login } from "../controllers/auth";

const router = express.Router();

// POST/auth/
router.post("/", registerUser);

// POST/auth/login
router.post("/login", login);

export default router;
