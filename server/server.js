import express from "express";
import cors from "cors";
import donationRouter from "./routes/db.route.js";
import paymentRouter from "./routes/payment.route.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Sahyog is working");
});

app.use("/api", donationRouter);
app.use("/payment", paymentRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
