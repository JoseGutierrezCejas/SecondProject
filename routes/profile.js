const router = require("express").Router();
const {isLoggedIn} = require("../middleware/route-gard.js")
const User = require("../models/User.model");

/* GET profile page */
router.get("/profile", isLoggedIn , async(req, res, next) => {

  const usrId = req.session.loggedUser._id

  const user = await User.findById(usrId).populate('recipes')

  res.render("profile",{userName: user.username, recipes: user.recipes});
});

module.exports = router;

