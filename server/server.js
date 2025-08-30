import express from "express";
import cors from "cors";
import { getAllProjects } from "./controllers/db.controller.js";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("Sahyog is working");
});

app.get("/api/donation-projects", getAllProjects);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
