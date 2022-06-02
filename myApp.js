let express = require("express");
require("dotenv").config();
let app = express();

absolutePath = __dirname + "/views/index.html";

staticServed = express.static(__dirname + "/public");

app.use("/public", staticServed);

app.use(function middleware(req, res, next) {
  console.log("I'm a middleware...");
  var string = req.method + " " + req.path + " - " + req.ip;
  console.log(string);
  next();
});

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
