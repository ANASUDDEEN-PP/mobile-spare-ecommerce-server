const express = require("express");
const router = express.Router();

//Import Controller
const brandController = require("../Controllers/brandController");

router.post('/create', brandController.createBrand);
router.get('/get/all', brandController.getBrands);
router.put('/update/:id', brandController.updateBrand)
router.delete('/delete/:id', brandController.deleteBrand);

module.exports = router;