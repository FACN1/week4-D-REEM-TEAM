var inputField = document.getElementById('autoCompleteInput');

function requestCallback(response) {
  render(response);
}


inputField.addEventListener("keyup", function(event){
  if(event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode === 8) {
    makeRequest(event.target.value, requestCallback);
  }
})



// autoCompleteInput
