require("dotenv").config();
const mongoose = require("mongoose");
const Deal = require("../models/Deal.js");

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected for seeding");
};

const deals = [
  {
    title: "AWS Credits for Startups",
    description: "Get up to $5,000 in AWS credits for early-stage startups.",
    category: "Cloud",
    partnerName: "Amazon Web Services",
    eligibilityText: "Startup must be less than 2 years old",
    isLocked: true,
  },
  {
    title: "Notion Team Plan – 6 Months Free",
    description: "Collaborate with your team using Notion’s team workspace.",
    category: "Productivity",
    partnerName: "Notion",
    eligibilityText: "Open to all startups",
    isLocked: false,
  },
  {
    title: "Mixpanel Growth Plan Discount",
    description: "50% off on Mixpanel Growth Plan for 1 year.",
    category: "Analytics",
    partnerName: "Mixpanel",
    eligibilityText: "Must have a live product",
    isLocked: true,
  },
];

const seedDeals = async () => {
  try {
    await connectDB();
    await Deal.deleteMany();
    await Deal.insertMany(deals);
    console.log("✅ Deals seeded successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDeals();
