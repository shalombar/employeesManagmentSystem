var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes'); // Imports routes 
var urlencodedParser = bodyParser.urlencoded({ extended: false });

let mongoUrl = 'mongodb://localhost:27017/employees';

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(cookieParser())

app.use('/employees', routes);

mongoSetup();

function mongoSetup() {
    mongoose.Promise = global.Promise;
    mongoose.connect(mongoUrl);
}

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
