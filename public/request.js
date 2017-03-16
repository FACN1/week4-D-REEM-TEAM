var Request = (function() {
    function makeRequest(searchWord, callback){
        var xhr = new XMLHttpRequest();
        var base = "/search?q=";  // do we need this??
        var url = base + searchWord;
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                callback(response);
            }
        }
        xhr.open("GET",url);
        xhr.send();
    }

    return {
        makeRequest: makeRequest
    }
})();
