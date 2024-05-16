const express = require('express');
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.renderIndex);
router.get("/signup", mainController.renderSignUp);
router.get("/login", mainController.renderLogin);

module.exports = router;