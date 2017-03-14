var http = require('http');

const port = 3000;

var start = function() {
    var server = http.createServer();

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
