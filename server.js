var http = require('http');
var router = require('./router')

var port = process.env.PORT || 3000;

var start = function() {
    var server = http.createServer(router.handler);

    server.listen(port, function() {
        console.log('Server running on port: ' + port);
    })
}

// var end = function() {
//     console.log('end server');
// }

module.exports = {
    start: start
};
