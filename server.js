var express = require('express');
var server = express();
const path = require('path');
var port = (process.env.PORT || 8080)
server.set('port', port);
server.use(express.static(__dirname + '/www'));
server.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/www/index.html'));
});
server.listen(port, function () {
    console.log('Listening on port' + server.get('port'));
});