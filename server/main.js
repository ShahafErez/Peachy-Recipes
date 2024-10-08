require("dotenv").config();
var express = require("express");
var path = require("path");
var logger = require("morgan");
const session = require("client-sessions");
const DButils = require("./routes/utils/DButils");
var cors = require("cors");

var app = express();
app.use(logger("dev")); // logger
app.use(express.json()); // parse application/json
app.use(
  session({
    cookieName: "session", // the cookie key name
    secret: "template", // the encryption key
    duration: 24 * 60 * 60 * 1000, // expired after 24 hours
    activeDuration: 1000 * 60 * 5, // if expiresIn < activeDuration,
    cookie: {
      httpOnly: false,
    },
  })
);
app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, "public"))); // To serve static files such as images, CSS files, and JavaScript files
app.use(express.static(path.join(__dirname, "dist")));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// CORS configuration
const corsConfig = {
  origin: "http://localhost:8080", // Replace with your actual front-end origin
  credentials: true,
};

app.use(cors(corsConfig));
app.options("*", cors(corsConfig));

var port = process.env.PORT || "3000";
const user = require("./routes/user");
const recipes = require("./routes/recipes");
const auth = require("./routes/auth");

// Cookie middleware
app.use(function (req, res, next) {
  if (req.session && req.session.user_id) {
    DButils.execQuery("SELECT user_id FROM users")
      .then((users) => {
        if (users.find((x) => x.user_id === req.session.user_id)) {
          req.user_id = req.session.user_id;
        }
        next();
      })
      .catch((error) => next());
  } else {
    next();
  }
});

// ----> For checking that our server is alive
app.get("/alive", (req, res) => res.send("I'm alive"));

// Routings
app.use("/users", user);
app.use(auth);
app.use("/recipes", recipes);

// Default router
app.use(function (err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).send({ message: err.message, success: false });
});

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

process.on("SIGINT", function () {
  if (server) {
    server.close(() => console.log("server closed"));
  }
  process.exit();
});
