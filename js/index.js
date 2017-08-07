let express = require("express");
let app = express();
//let unirest = require("unirest");
let fs = require("fs");
let mongoose  = require("mongoose");

//Connect to Mongoose

//mongoose.connect("mongodb://localhost/bookstore");
//let db = mongoose.connection;
//app.set('port',(process.env.PORT || 7500));


app.get('/', function(req, res){
    res.send("Please use /api/books or /api/genres");
});

app.listen(3002);
console.log("Running on port 3002");