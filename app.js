const express = require("express");
const morgan = require("morgan");
const giftRouter = require("./routes/gift-exchange");
const app = express();
const port = 3000;

app.use(morgan("tiny"));
app.use("/gift-exchange", giftRouter);

app.get("/", async (req, res, next) => {
  res.status(200).json({ ping: "pong" });
});

module.exports = app;
