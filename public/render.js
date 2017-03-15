// var testResult = {words: ["x", "xml", "xbox", "xp", "xhtml", "xl", "xanax"]};

var render = function(results){
    var resultsList = document.getElementById('resultsList');

    while (resultsList.hasChildNodes()) {
      resultsList.removeChild(resultsList.lastChild)
    }

    results.words.forEach(function(word, index, array){
      var suggestionNode = document.createElement('li');
      suggestionNode.textContent = word;
      suggestionNode.className = "suggestion";


        resultsList.appendChild(suggestionNode);

    });
}
