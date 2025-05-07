// Listing Model
// title - String
// description - String
// image - String
// price - Number
// location - String
// country - String
const mongoose = require("mongoose");
const { Schema } = mongoose;
const Review = require("./review.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    url: String,
    filename: String,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  geometry: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ["Point"], // 'location.type' must be 'Point'
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

// Middleware for Deleting Reviews once Listing is Deleted
listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing.reviews.length) {
    let res = await Review.deleteMany({ _id: { $in: listing.reviews } });
    console.log(res);
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
