import express from "express";
import { login } from "../controllers/auth.js";

const router = express.post();

router.post("/login", login);
