let express = require("express");
const req = require("express/lib/request");
let app = express();

absolutePath = __dirname + "/views/index.html"

staticServed = express.static(__dirname + "/public")

app.use("/public", staticServed)

app.get("/", function (req, res) {
    res.sendFile(absolutePath)
});

app.get("/json", function(req, res) {
    res.json({"message": "Hello json"})
})

console.log("Hello World");

module.exports = app;
