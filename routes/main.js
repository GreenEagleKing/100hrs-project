const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const productController = require("../controllers/products");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/library", ensureAuth, productController.getLibrary);
router.get("/profile", ensureAuth, productController.getProfile);
router.post("/signup", authController.postSignup);
router.get("/signup", authController.getSignup)
router.post("/login", authController.postLogin)
router.get("/login", authController.getLogin);
router.get("/logout", authController.logout)


module.exports = router;