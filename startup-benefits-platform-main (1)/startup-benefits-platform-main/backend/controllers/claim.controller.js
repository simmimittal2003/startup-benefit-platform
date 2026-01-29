const Claim = require("../models/Claim");
const Deal = require("../models/Deal");

const claimDeal = async (req, res) => {
  const deal = await Deal.findById(req.params.dealId);
  if (!deal) return res.status(404).json({ message: "Deal not found" });

  if (deal.isLocked && !req.user.isVerified) {
    return res.status(403).json({ message: "Verification required" });
  }

  const exists = await Claim.findOne({
    userId: req.user.id,
    dealId: deal._id
  });

  if (exists) return res.status(400).json({ message: "Already claimed" });

  const claim = await Claim.create({
    userId: req.user.id,
    dealId: deal._id
  });

  res.status(201).json(claim);
};

const getMyClaims = async (req, res) => {
  const claims = await Claim.find({ userId: req.user.id }).populate("dealId");
  res.json(claims);
};

module.exports = { claimDeal, getMyClaims };
