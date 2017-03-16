var router = require('../router');



var sendError = function(req, res) {
    res.writeHead(500, router.headerLookup['html']);
    res.write('<h1> Internal server error :o </h1>');
    res.end();
}

module.exports = {
    sendError: sendError
}
