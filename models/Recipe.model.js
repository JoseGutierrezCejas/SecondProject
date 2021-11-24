const { Schema, model } = require("mongoose");

const recipeSchema = new Schema(
  {
    idMeal: { type: String, required: true },
    strInstructions: { type: String, required: true },
    strMealThumb: { type: String },
    comic: [{ resourceURI: { type: String }, name: { type: String } }],
  },
  { timestamps: true }
);

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
