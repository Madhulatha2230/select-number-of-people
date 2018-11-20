var express = require("express");
var app=express();
var path = require("path");
var bodyParser = require("body-parser");

var routes = require('./routes/choosepeople');


app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));
//set Static Folder
app.use(express.static(path.join(__dirname,'public')));

//Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '10mb',extended: false}));

app.use('/',routes);
var choosepeople = require('./routes/choosepeople');

app.use('/choosepeople',choosepeople);
//Set Port
app.set('port',5000);
app.listen(app.get('port'),function(re){

  console.log('localhost hosted at:5000');

});
