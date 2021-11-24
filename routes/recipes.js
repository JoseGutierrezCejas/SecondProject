const router = require("express").Router();
const chalk = require("chalk");
const axios = require("axios");

const Recipe = require("../models/Recipe.model");
const User = require("../models/User.model");

// //My own middleware
// const {isLoggedIn} = require("../middleware/route-gard")

// router.get("/", isLoggedIn, async (req, res) => {
//   try {
//     const axiosCall = await axios(
//       `https://www.themealdb.com/api/json/v1/1/search.php?s`
//     );
//     console.log("hola")
//     const recipesInfo = axiosCall.data.data.results; //esto es un array
//     res.render("./recipes.hbs", { recipesInfo });
//   } catch (err) {
//     console.log(chalk.bgRed(err));
//   }
// });

// router.post("/create/:id", async (req, res) => {
//   const axiosCall = await axios(
//     `http://gateway.marvel.com/v1/public/characters/${req.params.id}?ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH}`
//   );

//   const infoFromRecipe = axiosCall.data.data.results;

//   const dataToUpload = {
//     name: infoFromCharacter[0].name,
//     description: infoFromCharacter[0].description,
//     thumbnail:
//       infoFromCharacter[0].thumbnail.path +
//       "." +
//       infoFromCharacter[0].thumbnail.extension,
//     comic: [...infoFromCharacter[0].comics.items],
//   };

//   const justCreatedRecipe = await Recipe.create(dataToUpload);

//   await User.findByIdAndUpdate(
//     req.session.loggedUser._id,
//     { $push: { recipes: justCreatedRecipe._id } },
//     { new: true }
//   );

//   res.redirect('/')
// });

module.exports = router;
