var router = require('../router');



var sendError = function(req, res) {
    res.writeHead(404, router.headerLookup['html']);
    res.write('<h1> Page not Found :( </h1>');
    res.end();
}

module.exports = {
    sendError: sendError
}
