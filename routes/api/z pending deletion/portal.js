// const router = require("express").Router();

//PASSPORT
var db = require("../../models")
var passport = require("../../passport")

module.exports = function(app) {
  // If the user has valid login credentials, send them to the members page.

  app.post("/api/portal/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  // Route for singing up a user. The user's password is automatically hashed and stored based on how the model is configured. If the user is created successfully, proceed to log the user in.

  app.post("/api/portal/signup", function(req, res) {
    db.
  })
}
