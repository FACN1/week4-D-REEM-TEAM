var fs = require('fs');
var path = require('path');
var router = require('../router');
var server = require('../server');


function searchHandler (req, res) {
    var url = req.url;
    var queryString = url.split("search?q=")[1];
    searchAutocomplete(queryString, function (error, responseArray){
        if (error) {
            router.routes["500"](req, res);
            return;
        }
        var responseWords = {
            words: responseArray
        }
        res.writeHead(200, router.headerLookup["txt"]);
        res.write(JSON.stringify(responseWords));
        res.end();
    })
}


function searchAutocomplete (searchWord, callback) {
    var filePath = path.join(__dirname,"../resources/en.txt");
    getWordList(server.wordList.toString() != ['empty'], function (error, wordList) {
        if (error) {
            callback(error);
            return;
        }

        // var wordList = file.toString().split("\n");
        var counter = 0;
        var responseArray = wordList.filter(function(word, index) {
            if (counter < 7 && word.startsWith(searchWord)) {
                counter += 1;
                return true;
            }
            else {
                return false;
            }
            //  return (index < 7) ? word.startsWith(searchWord);
        })
        callback(null, responseArray);
    });
}
function getWordList(loaded, callback) {
    if (!loaded) {
        var filePath = path.join(__dirname,"../resources/en.txt");
        fs.readFile(filePath, function (error, file) {
            if (error) {
                callback(error);
                return;
            }
            console.log('File has loaded...')
            server.wordList = file.toString().split("\n");
            callback(null, server.wordList);
        });
    } else {
        callback(null, server.wordList);
    }
}

module.exports = {
    search: searchHandler,
    searchAutocomplete: searchAutocomplete,
    getWordList: getWordList
}
