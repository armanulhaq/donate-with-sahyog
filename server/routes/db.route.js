import express from "express";
import { getAllProjects } from "../controllers/db.controller.js";

const router = express.Router();

router.get("/donation-projects", getAllProjects);

export default router;
