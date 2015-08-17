var express = require("express"),
    app = express();

app.get("/", function(req, res, next) {
    res.send("hello");
    next();
});

var server = app.listen(3000, function() {
    var host = server.address().address;
	var port = server.address().port;
	
	console.log("listening at http://%s:%s", host, port);
})