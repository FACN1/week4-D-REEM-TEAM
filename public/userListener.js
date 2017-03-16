var UserListener = (function() {
    var inputField = document.getElementById('autoCompleteInput');

    function requestCallback(response) {
        Render.render(response);
    }


    inputField.addEventListener("keyup", function(event){
        if(event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode === 8) {
            Request.makeRequest(event.target.value, requestCallback);
        }
    })



    // autoCompleteInput
})();
