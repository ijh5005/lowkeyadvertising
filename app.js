var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.get('/', function(request, response, next){
  response.send('it is working');
})

app.listen(3000);
