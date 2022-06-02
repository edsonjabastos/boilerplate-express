let express = require("express");
const req = require("express/lib/request");
require("dotenv").config();
let app = express();

absolutePath = __dirname + "/views/index.html";

staticServed = express.static(__dirname + "/public");

app.use("/public", staticServed);

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
