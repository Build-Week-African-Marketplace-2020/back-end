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

router.post("/products", async (req, res, next) => {
  try {
    const ids = await db("products").insert(req.body, "id");
    const newProduct = await db("products")
      .where({ id: ids[0] })
      .first();

    res.status(201).json({
      message: `${newProduct.name} successfully saved to the database!`
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
