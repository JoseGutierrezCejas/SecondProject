const { Schema, model } = require("mongoose");

const recipeSchema = new Schema(
  {
    strMeal:{type:String, required:true},
    idMeal: { type: String, required: true },
    strInstructions: { type: String, required: true },
    strMealThumb: { type: String },
    strYoutube: { type: String },
    ingredients: { type : [String] },
    
  },
  { timestamps: true }
);

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
