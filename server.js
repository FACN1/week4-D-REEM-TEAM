var http = require('http');
var router = require('./router')
var searchHandler = require('./routes/searchHandler');

var port = process.env.PORT || 3000;

var wordList = ['empty'];

var start = function() {
    var server = http.createServer(router.handler);

    server.listen(port, function() {
        console.log('Server running on port: ' + port);
    })
    // searchHandler.getWordList(false, function(error, file) {
    //     if (error) {
    //         console.log('Word list failed to load');
    //         return;
    //     }
    //     console.log('Word list file loaded!');
    // });
}

// var end = function() {
//     console.log('end server');
// }
module.exports.wordList = wordList;
module.exports = {
    start: start
};
