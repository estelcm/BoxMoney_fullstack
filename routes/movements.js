//este express viene de tus dependencias
const express = require("express");
const router = express.Router();
const { getAllMovements, getSalaryM } = require("../controllers/movements");

router.get("/mov", getAllMovements);
router.get("/mov/salary", getSalaryM);

// router.get("/home-products/:id", getProduct);

// router.post("/home-products", createProduct);

// router.put("/home-products/:id", updateProduct);

// router.delete("/home-products/:id", deleteProduct);

module.exports = router;
