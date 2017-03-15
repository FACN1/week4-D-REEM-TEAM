var test = require('tape');
var searchHandler = require('../routes/searchHandler');



test('Test searchAutocomplete', function (t) {
  // t.plan(2);    // With t.plan(), no need for t.end()
  searchHandler.searchAutocomplete('hel', function (error, result) {
    t.error(error);
    t.deepEqual(result, ["help","held","helpful","hello","helps","helping","helped"]);
    t.end();
  });
});
