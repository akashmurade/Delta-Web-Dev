const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("ejs", ejsMate);

async function main() {
  await mongoose.connect("mongodb://localhost:27017/wanderlust");
}

main()
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.listen(8080, () => {
  console.log("app listening on port 8080");
});

app.get("/", (req, res) => {
  res.send("Root");
});

app.get("/testListing", async (req, res) => {
  let sampleTesting = new Listing({
    title: "Stones",
    description: "Near water",
    price: 25000,
    location: "Mono Lake, California",
    country: "America",
  });
  await sampleTesting.save();
  console.log("saved");
  res.send("success");
});

// Index Route
app.get("/listings", async (req, res) => {
  let allListings = await Listing.find();
  res.render("listings/index.ejs", { allListings });
});

// New Route (takes to the form to make new listing)
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

// Show Route
app.get("/listings/:id", async (req, res) => {
  let listing = await Listing.findById(req.params.id);
  res.render("listings/show.ejs", { listing });
});

// Create Route
app.post("/listings", async (req, res) => {
  await Listing.insertMany(req.body);
  res.redirect("/listings");
});

// Edit Route
app.get("/listings/:id/edit", async (req, res) => {
  let listing = await Listing.findById(req.params.id);
  res.render("listings/edit.ejs", { listing });
});

// Update Route
app.put("/listings/:id", async (req, res) => {
  await Listing.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/listings/" + req.params.id);
});

// Destroy Route
app.delete("/listings/:id", async (req, res) => {
  await Listing.findByIdAndDelete(req.params.id);
  res.redirect("/listings");
});
