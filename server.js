var express = require('express');
var server = express();
const path = require('path');
var port = (process.env.PORT || 8080)
server.set('port', port);
server.use(express.static('/www'));
server.all('*', function(req,res) {
    res.status(200).sendFile('/www/index.html');
});
server.listen(port, function () {
    console.log('Listening on port' + server.get('port'));
});