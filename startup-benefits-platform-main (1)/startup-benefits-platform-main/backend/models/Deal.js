const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    category: String,
    partnerName: String,
    eligibilityText: String,
    isLocked: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Deal", dealSchema);
