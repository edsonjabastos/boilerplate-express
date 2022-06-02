let express = require("express");
let bodyParser = require("body-parser")
require("dotenv").config();
let app = express();

absolutePath = __dirname + "/views/index.html";

staticServed = express.static(__dirname + "/public");

bpurl = bodyParser.urlencoded({extended: false})

app.use(bpurl)

console.log(bpurl)

app.use("/public", staticServed);

app.use(function middleware(req, res, next) {
  console.log("I'm a middleware...");
  var string = req.method + " " + req.path + " - " + req.ip;
  console.log(string);
  next();
});

app.get(
  "/now",
  function (req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function (req, res) {
    res.json({ time: req.time });
  }
);

app.get(
  "/:word/echo",
  function (req, res, next) {
    word = req.params.word;
    next();
  },
  function (req, res) {
    res.json({ echo: word });
  }
);

app.get(
  "/name",
  function (req, res, next) {
    query = req.query;
    first = query.first;
    last = query.last;
    next();
  },
  function (req, res) {
    res.json({ name: `${first} ${last}` });
  }
);

// app.route("/name2").get(
//   function (req, res, next) {
//     query = req.query;
//     first = query.first;
//     last = query.last;
//     next();
//   },
//   function (req, res) {
//     res.json({ name2: `${first} ${last}` });
//   }
// );

app.get("/", function (req, res) {
  res.sendFile(absolutePath);
});

app.get("/json", function (req, res) {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
  }
});

console.log("Hello World");

module.exports = app;
