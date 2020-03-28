var express = require("express");
var app = express();

app.use(express.static('public'));

app.use('/css',express.static(__dirname+'/public/css'));
app.use('/img',express.static(__dirname+'/public/img'));
app.use('/js',express.static(__dirname+'/public/js'));
app.use('/pages',express.static(__dirname+'/public/pages'));

console.log("started");
app.listen(3001);