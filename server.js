var express = require('express');
var app = express();

var middleware = require('./middleware')
//route level middle ware.

app.use(middleware.logger);//app.use gets used on entire app both root and about routes willprint out private route hit

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.send('Hello Express!');
});

app.get('/about', middleware.requireAuthentication, function(req, res) {
    res.send('About us');
})








var PORT = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('I hear you on port:', port);
})
