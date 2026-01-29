const Deal = require("../models/Deal");

const getAllDeals = async (req, res) => {
  const deals = await Deal.find();
  res.json(deals);
};

const getDealById = async (req, res) => {
  const deal = await Deal.findById(req.params.id);
  if (!deal) return res.status(404).json({ message: "Deal not found" });
  res.json(deal);
};

module.exports = { getAllDeals, getDealById };
