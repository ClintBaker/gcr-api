import mongoose from "mongoose";

const rankSchema = new mongoose.Schema({
  courseName: String,
  greenQuality: Number,
  proShop: Number,
  weather: Number,
  difficulty: Number,
  views: Number,
  service: Number,
});

export const Rank = mongoose.model("Rank", rankSchema);
