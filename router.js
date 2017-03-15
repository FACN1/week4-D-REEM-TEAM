var path = require('path');
var fs = require('fs');
var searchHandler = require('./routes/searchHandler');

var routes = {
  // "/": indexHandler,
  // "file": fileHandler,
  // "404": notFoundHandler,
  // "500": serverErrorHandler,
  "search": searchHandler.search
};

// const header =
var headerLookup = {
    "html": {
      "content-type": "text/html"
    },
    "css": {
        "content-type": "text/css"
    },
    "js": {
        "content-type": "text/javascript"
    },
    "txt": {
        "content-type": "text/plain"
    }
}

var handler = function(req, res) {
    // read request, and extract query.
    var url = req.url;
    var filePath = path.join(__dirname, "./public"+url);
    // example url: '/main.css'
    var fileExtension = url.split('.')[1];

    if (routes[url]) {
      routes[url](req, res);
    }
    else if (url.startsWith("/search?q=")) {
      routes["search"](req, res);
    }
    else {
      fs.access(filePath, fs.constants.F_OK, function(error){
        if (error) {
          res.writeHead(404, headerLookup["html"]);
          res.write("<h1> File not found :( </h1>");
          res.end();
          return;
        }
        fs.readFile(filePath, function(error, file){
          if(error) {
            res.writeHead(500, headerLookup["html"]);
            res.write("<h1> Server error :o </h1>");
            res.end();
            return;
          }
          res.writeHead(200, headerLookup[fileExtension] || headerLookup["txt"]);
          res.write(file);
          res.end();
        })
      })
    }
    // collate a response
    // res.end();
}

module.exports.headerLookup = headerLookup;
module.exports = {
    handler: handler,
    headerLookup: headerLookup
};
