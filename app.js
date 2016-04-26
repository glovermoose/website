var express = require('express');
var app = express();
var serv = require('http').Server(app);
app.get('/', function (req, res)
{
    res.sendFile(__dirname + '/client/game.html');
});
app.use('/client', express.static (__dirname + '/client'));

serv.listen(2000);