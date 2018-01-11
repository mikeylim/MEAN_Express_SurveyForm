var express = require("express");
var app = express();
var path = require("path");
var port = 8000;
var bodyParser = require("body-parser");
var session = require("express-session");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/static")));
app.use(session({ 
    secret: "codingdojo",
    resave: true,
    saveUninitialized: true
}));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.get('/', function(request, response){
    response.render("index");
});

app.post("/submit", function(request, response){
    var info = request.body;
    response.render("result", {context: info});
});

app.listen(port, function(){
    console.log("listening");
});