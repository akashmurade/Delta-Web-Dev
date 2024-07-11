const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

const MONGO_URL = "mongodb://localhost:27017/wanderlust";

async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

async function init() {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("initialized");
}

init();
