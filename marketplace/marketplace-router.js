const express = require("express");
const db = require("../database/dbConfig");
const restricted = require("../middleware/restricted");
const router = express.Router({
  mergeParams: true
});

// PRODUCT ROUTES
router.get("/products", async (req, res, next) => {
  try {
    const products = await db("products").select();

    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
});

router.post("/products", restricted(), async (req, res, next) => {
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

router.get("/products/:id", async (req, res, next) => {
  try {
    const product = await db("products")
      .where({ id: req.params.id })
      .first();

    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});

// CATERGORY ROUTES
router.get("/categories", async (req, res, next) => {
  try {
    const cat = await db("categories").select();

    res.status(200).json(cat);
  } catch (err) {
    next(err);
  }
});

router.get("/categories/:id", async (req, res, next) => {
  try {
    const cat = await db("categories")
      .where({ id: req.params.id })
      .first();

    res.status(200).json(cat);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
