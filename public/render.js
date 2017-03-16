var Render = (function() {
    // var testResult = {words: ["x", "xml", "xbox", "xp", "xhtml", "xl", "xanax"]};
    var inputField = document.getElementById('autoCompleteInput');
    var form = document.getElementById('autoCompleteForm');

    var refresh = function(){
      var newList = document.createElement('ul');
      resultsList.id = 'resultsList';
      form.replaceChild(newList, form.lastChild);
    }

    var render = function(results){
        // var resultsList = document.getElementById('resultsList');

        // if (form.childNodes[1]) {
        //     form.removeChild(form.childNodes[1]);
        // }
        var resultsList = document.createElement('ul');
        resultsList.id = 'resultsList';

        // while (resultsList.hasChildNodes()) {
        //     resultsList.removeChild(resultsList.lastChild)
        // }

        results.words.forEach(function(word, index, array){
            var suggestionNode = document.createElement('li');
            suggestionNode.textContent = word;
            suggestionNode.className = "suggestion";

            suggestionNode.addEventListener('click', function(event){
                var suggestedWord = event.target.textContent;
                inputField.value = suggestedWord;
              })

            resultsList.appendChild(suggestionNode);

        });
        // form.appendChild(resultsList);
        form.replaceChild(resultsList, form.lastChild);
    }


    return {
        render: render,
        refresh: refresh
    }
})();
