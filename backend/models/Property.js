const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: {
    type: String,
    required: true,
    enum: ["Apartment", "Villa", "Studio", "House"],
  },
  image: String,
});

module.exports = mongoose.model("Property", propertySchema);
