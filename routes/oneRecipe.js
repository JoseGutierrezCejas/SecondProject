const router = require("express").Router();

const Recipe = require("../models/Recipe.model");

router.get("/recipes", (req, res) => {
  res.render("recipes.hbs");
});

module.exports = router;