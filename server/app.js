var express = require('express');
var path = require('path')
var publicDir = __dirname + '/../public/';

app = express();
app.use('/', express.static(publicDir));
app.listen(9000, 'localhost');
