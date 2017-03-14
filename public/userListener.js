var inputField = document.getElementById('autoCompleteInput');


inputField.addEventListener("keyup", function(event){
  if(event.keyCode >= 65 && event.keyCode <= 90) {
    console.log(event.target.value);
  }
})



// autoCompleteInput
