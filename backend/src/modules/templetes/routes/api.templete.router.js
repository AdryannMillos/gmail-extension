const express = require("express");
const router = express.Router();
const templeteController = require("../controllers/templeteController");

router.get("/", templeteController.index);
router.get("/:id", templeteController.single);




module.exports = router;

