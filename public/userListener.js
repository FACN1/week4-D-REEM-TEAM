var UserListener = (function() {
    var inputField = document.getElementById('autoCompleteInput');


inputField.addEventListener("keyup", function(event){
  if(event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode === 8) {
    var inputValue = event.target.value;
    Request.makeRequest(inputValue, Render.render);
  }
})






    // autoCompleteInput
})();
