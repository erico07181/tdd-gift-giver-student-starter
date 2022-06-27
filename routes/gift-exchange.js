const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  res.status(200);
});

router.post("/traditional", async (req, res, next) => {
  res.status(200);
  res.send(req.query);
});

router.post("/pairs", async (req, res, next) => {
  res.status(200);
  res.send(req.query);
});

module.exports = router;
