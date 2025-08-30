import express from "express";
import cors from "cors";
import donationRouter from "./routes/db.route.js";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("Sahyog is working");
});

app.use("/api", donationRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
