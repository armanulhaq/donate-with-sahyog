import express from "express";
import {
    getAllProjects,
    getProjectById,
} from "../controllers/db.controller.js";

const donationRouter = express.Router();

donationRouter.get("/donation-projects", getAllProjects);
donationRouter.get("/donation-project/:id", getProjectById);

export default donationRouter;
