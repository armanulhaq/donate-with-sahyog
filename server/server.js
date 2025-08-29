import express from "express";

const app = express();
app.use(cors);

app.get("/", (req, res) => {
    res.send("Sahyog is working");
});

app.listen(PORT, (req, res) => {
    console.log(`Server started on ${PORT}`);
});
