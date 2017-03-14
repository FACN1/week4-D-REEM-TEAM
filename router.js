var path = require('path');
var fs = require('fs');

var routes = {
  // "/": indexHandler,
  // "file": fileHandler,
  // "404": notFoundHandler,
  // "500": serverErrorHandler,
  // "search": searchHandler
};

const header = {
  "content-type": "text/html"
}

var handler = function(req, res) {
    // read request, and extract query.
    var url = req.url;
    var filePath = path.join(__dirname, "./public"+url);
    if (routes[url]) {
      routes[url](req, res);
    }
    else if (url.startsWith("/search?q=")) {
      routes["search"](req, res);
    }
    else {
      fs.access(filePath, fs.constants.F_OK, function(error){
        if (error) {
          res.writeHead(404, header);
          res.write("<h1> File not found :( </h1>");
          res.end();
          return;
        }
        fs.readFile(filePath, function(error, file){
          if(error) {
            res.writeHead(500, header);
            res.write("<h1> Server error :o </h1>");
            res.end();
            return;
          }
          res.writeHead(200, header);
          res.write(file);
          res.end();
        })
      })
    }
    // collate a response
    // res.end();
}

module.exports = {handler: handler};
