var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cricketplayer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var cricketplayer = require('../routes/cricketplayer_route')(app);

var server = app.listen(3000, function () {
    console.log('Server running at http://127.0.0.1:3000/');
});
