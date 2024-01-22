import mongoose from "mongoose";

const rankSchema = new mongoose.Schema({
  courseName: String,
  greenQuality: Number,
  proShop: Number,
  weather: Number,
  difficulty: Number,
  views: Number,
  service: Number,
  score: Number,
});

// middleware pre save
rankSchema.pre("save", function (next) {
  this.score =
    this.greenQuality +
    this.proShop +
    this.weather +
    this.difficulty +
    this.views +
    this.service;
  next();
});

rankSchema.post("findOneAndUpdate", async function (result) {
  try {
    const rank = await Rank.findById(result._id);
    rank.score =
      result.greenQuality +
      result.proShop +
      result.weather +
      result.difficulty +
      result.views +
      result.service;
    await rank.save();
  } catch (e) {
    throw new Error(e);
  }
});

export const Rank = mongoose.model("Rank", rankSchema);
