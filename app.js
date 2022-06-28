const express = require("express");
const morgan = require("morgan");
const giftRouter = require("./routes/gift-exchange");
const app = express();
const port = 3000;

app.use(morgan("tiny"));
app.use("/gift-exchange", giftRouter);
app.use(express.json());

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message;
  return res.status(status).json({
    error: { message, status },
  });
});

app.get("/", async (req, res, next) => {
  res.status(200).json({ ping: "pong" });
});

module.exports = app;
