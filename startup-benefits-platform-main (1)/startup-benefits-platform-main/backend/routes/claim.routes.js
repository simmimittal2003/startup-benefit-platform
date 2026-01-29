const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const {
  claimDeal,
  getMyClaims
} = require("../controllers/claim.controller");

router.post("/:dealId", auth, claimDeal);
router.get("/my", auth, getMyClaims);

module.exports = router;
