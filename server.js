var express = require('express');
var server = express();
server.set('port', (process.env.PORT || 8080));
server.use('/', express.static(__dirname + '/www'));
server.listen(server.get('port'));