const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const db = require("./models");

const routes = require("./routes");


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ftcblogg",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose Is Connected");
  }
);

// MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", // React App Server
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);


// ROUTES
// POST ROUTE: REGISTER USER
app.post("/api/user/register", (req, res) => {
  db.User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("This User Already Exists in the Database");
    if (!doc) {
      const hashedPass = await bcrypt.hash(req.body.password, 11);
      const newUser = new db.User({
        username: req.body.username,
        password: hashedPass,
      });
      await newUser.save();
      res.send("New User Has Been Created");
    }
  });
});
// POST ROUTE: USER LOGIN
app.post("/api/user/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send(false);
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send(true);
        console.log(req.user);
      });
    }
  })(req, res, next);
});
// GET ROUTE
app.get("/api/user/user", (req, res) => {
  res.send(req.user); // The req.user stores the authenticated user.
});

// NOTE: important to put this below the passport middleware otherwise the registration/authentication won't go through.
app.use(routes);

// Start Server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


// ORIGINAL MIDDLEWARE
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());



// { authenticate: true }


