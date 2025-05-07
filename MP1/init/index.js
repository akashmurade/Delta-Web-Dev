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
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "67666ed28da516d054c6ed0f",
  }));
  await Listing.insertMany(initData.data);
  console.log("initialized");
}

init();
