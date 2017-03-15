var fs = require('fs');
var path = require('path');
var router = require('../router');


function searchHandler (req, res) {
    console.log(searchHandler);
    var url = req.url;
    var queryString = url.split("search?q=")[1];
    var result = searchAutocomplete(queryString);
    if (!result) {
        res.writeHead(500, router.headerLookup["html"]);
        res.write("Internal Server Error :O");
        res.end();
    }

}

function searchAutocomplete (searchWord) {
    var filePath = path.join(__dirname,"../resources/en.txt");
    fs.readFile(filePath, function (error, file) {
        if (error) {
            return false;
            //return?
        }

        var wordList = file.toString().split("\n");
        console.log(wordList.length)
        return true;
    });
}

module.exports = {
    search: searchHandler
}
