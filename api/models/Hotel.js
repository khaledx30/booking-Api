import mongoose from "mongoose";

const { Schema } = mongoose;

// Common options for required string fields
const requiredString = { type: String, required: true };

const HotelSchema = Schema({
  name: requiredString,
  type: requiredString,
  city: requiredString,
  address: requiredString,
  distance: requiredString,
  desc: requiredString,
  rating: { type: Number, min: 0, max: 5 },
  rooms: [String],
  photos: [String],
  cheapestPrice: { type: Number, required: true },
  featured: { type: Boolean, default: false },
});

export default mongoose.model("Hotel", HotelSchema);
