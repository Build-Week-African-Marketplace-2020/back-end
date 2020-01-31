const express = require("express");
const db = require("../database/dbConfig");
const router = express.Router({
  mergeParams: true
});

router.get("/products", async (req, res, next) => {
  try {
    const products = await db("products").select();

    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
