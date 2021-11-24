const router = require("express").Router();
const axios = require("axios");


const Recipe = require("../models/Recipe.model");

// router.get("/recipes", (req, res) => {
//   res.render("recipes.hbs");
// });
//My own middleware
const {isLoggedIn} = require("../middleware/route-gard")

router.get("/", isLoggedIn, async (req, res) => {
  try {
    const axiosCall = await axios(
      `https://www.themealdb.com/api/json/v1/1/search.php?s`
    );
    // console.log(axiosCall.data.strMeal)
    const recipesInfo = axiosCall.data.meals; //esto es un array
    console.log (recipesInfo.length)
    res.render("./recipes.hbs", { recipesInfo });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

