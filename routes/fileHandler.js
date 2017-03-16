var fs = require('fs');
var path = require('path');
var router = require('../router');


var fileLoad = function(url, req, res) {
    var filePath = path.join(__dirname, "../public"+url);
    var fileExtension = url.split('.')[1];

    fs.access(filePath, fs.constants.F_OK, function(error){
      if (error) {
        router.routes["404"](req, res);
        return;
      }
      fs.readFile(filePath, function(error, file){
        if(error) {
          router.routes["500"](req, res);
          return;
        }
        res.writeHead(200, router.headerLookup[fileExtension] || router.headerLookup["txt"]);
        res.write(file);
        res.end();
      })
    })
}

module.exports = {
    fileLoad: fileLoad
}
