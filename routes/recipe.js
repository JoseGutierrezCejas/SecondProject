const router = require("express").Router();
const axios = require("axios");

const Recipe = require("../models/Recipe.model");
const User = require("../models/User.model");

// router.get("/recipes", (req, res) => {
//   res.render("recipes.hbs");
// });
//My own middleware
const { isLoggedIn } = require("../middleware/route-gard");

router.get("/", isLoggedIn, async (req, res) => {
  try {
    const axiosCall = await axios(
      `https://www.themealdb.com/api/json/v1/1/search.php?s`
    );
    // console.log(axiosCall.data.strMeal)
    const recipesInfo = axiosCall.data.meals; //esto es un array
    // console.log (recipesInfo.length)
    res.render("./recipes.hbs", { recipesInfo });
  } catch (err) {
    // console.log(err);
  }
});

router.post("/create/:idMeal", async (req, res) => {
  const userId = req.session.loggedUser._id;

  const infoFromRecipe = await axios(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${req.params.idMeal}`
  );

  const info = infoFromRecipe.data.meals[0];

  const { strMeal, idMeal, strInstructions, strMealThumb, strYoutube } = info;

  const ingredients = [];
  for (key in info) {
    if (key.includes("strIngredient") && info[key] !== "") {
      ingredients.push(info[key]);
    }
  }

  const createdRecipe = await Recipe.create({
    strMeal,
    idMeal,
    strInstructions,
    strMealThumb,
    strYoutube,
    ingredients,
  });

  await User.findByIdAndUpdate(userId, {
    $push: { recipes: createdRecipe._id },
  });

  res.redirect("/profile");
});

//delete favorite

router.post("/delete/:id", async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    await User.findByIdAndUpdate(req.session.loggedUser._id, {
      $pull: { recipes: req.params.id },
    });
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/profile`);
});

module.exports = router;
