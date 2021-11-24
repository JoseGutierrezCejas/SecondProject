const { Schema, model } = require("mongoose");

const recipeSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    thumbnail: { type: String },
    comic: [{ resourceURI: { type: String }, name: { type: String } }],
  },
  { timestamps: true }
);

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
