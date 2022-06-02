let express = require("express");
let app = express();

absolutePath = __dirname + "/views/index.html"

staticServed = express.static(__dirname + "/public")

app.use("/public", staticServed)

app.get("/", function (req, res) {
    res.sendFile(absolutePath)
});

console.log("Hello World");

module.exports = app;
