var express = require("express"),
    app = express();

app.get("/", function(req, res, next) {
    res.send("hello");
    next();
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
	console.log("listening");
})