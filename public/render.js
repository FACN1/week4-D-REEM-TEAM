// var testResult = {words: ["x", "xml", "xbox", "xp", "xhtml", "xl", "xanax"]};
var inputField = document.getElementById('autoCompleteInput');

var render = function(results){
    var resultsList = document.getElementById('resultsList');

    while (resultsList.hasChildNodes()) {
      resultsList.removeChild(resultsList.lastChild)
    }

    results.words.forEach(function(word){
      var suggestionNode = document.createElement('li');
      suggestionNode.textContent = word;
      suggestionNode.className = "suggestion";

      suggestionNode.addEventListener('click', function(event){
        var suggestedWord = event.target.textContent;
        inputField.value = suggestedWord;

      })


        resultsList.appendChild(suggestionNode);

    });
}
