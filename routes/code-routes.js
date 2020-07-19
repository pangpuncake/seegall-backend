const express = require("express");
const router = express.Router();

const codeController = require("../controllers/code-controllers");

router.post("/", codeController.postCode);
router.get("/", codeController.testURL);

router.get("/sorting/:id", codeController.getSort);

module.exports = router;
