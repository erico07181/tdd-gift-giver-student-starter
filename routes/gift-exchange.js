const express = require("express");
const router = express.Router();
const GiftExchange = require("../models/gift-exchange");

router.get("/", async (req, res, next) => {
  res.status(200);
});

router.post("/traditional", async (req, res, next) => {
  try {
    const result = await GiftExchange.traditional(req.body.names);
    res.status(200).json({ result });
  } catch (err) {
    next(err);
  }
});

router.post("/pairs", async (req, res, next) => {
  try {
    const result = await GiftExchange.pairs(req.body.names);
    res.status(200).json({ result });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
