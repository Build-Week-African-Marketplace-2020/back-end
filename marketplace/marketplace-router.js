const express = require("express");
const db = require("../database/dbConfig");
const restricted = require("../auth/restricted-middleware.js");
const mpModel = require("./marketplace-model");
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

router.post("/products", restricted, async (req, res, next) => {
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

router.put("/products/:id", restricted, async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await mpModel.update(id, req.body);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({
        message: "Could not find a product with the given ID"
      });
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/products/:id", restricted, async (req, res, next) => {
  try {
    const { id } = req.params;
    const delProduct = await mpModel.remove(id);

    if (delProduct) {
      res.status(204).json({
        message: "Product deleted"
      });
    } else {
      res.status(404).json({
        message: "Could not find a product with given ID"
      });
    }
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

router.post("/categories", restricted, async (req, res, next) => {
  try {
    const ids = await db("categories").insert(req.body, "id");
    const newCat = await db("categories")
      .where({ id: ids[0] })
      .first();

    res
      .status(201)
      .json(
        `New category named: ${newCat.name}, has been added to the database!`
      );
  } catch (err) {
    next(err);
  }
});

// COMMODITY ROUTES
router.get("/comm", async (req, res, next) => {
  try {
    const comms = await db("commodities").select();

    res.json(comms);
  } catch (err) {
    next(err);
  }
});

router.get("/comm/:id", async (req, res, next) => {
  try {
    const comms = await db("commodities")
      .where({ id: req.params.id })
      .first();

    res.json(comms);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
