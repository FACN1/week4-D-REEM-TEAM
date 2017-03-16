var path = require('path');
var fs = require('fs');
var searchHandler = require('./routes/searchHandler');
var fileHandler = require('./routes/fileHandler');
var notFoundHandler = require('./routes/notFoundHandler');
var serverErrorHandler = require('./routes/serverErrorHandler');

var routes = {
  // "/": indexHandler,
  "file": fileHandler.fileLoad,
  "404": notFoundHandler.sendError,
  "500": serverErrorHandler.sendError,
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
    else if (url === '/') {
        routes["file"]('/index.html', req, res);
    }
    else if (url.startsWith("/search?q=")) {
        routes["search"](req, res);
    }
    else {
        routes["file"](url, req, res);
    }
    // collate a response
    // res.end();
}

module.exports.headerLookup = headerLookup;
module.exports.routes = routes;
module.exports = {
    handler: handler,
    headerLookup: headerLookup
};
