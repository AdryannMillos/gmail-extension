const express = require("express");
const router = express.Router();
const templeteController = require("../controllers/templeteController");

router.get("/", templeteController.index);
router.post("/create", templeteController.store);




module.exports = router;

