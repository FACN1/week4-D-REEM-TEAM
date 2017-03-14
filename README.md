# week4-D-REEM-TEAM
Autocomplete Project

Module and file plan

### Client side

  - index.html
  - userListener.js
    - eventListener(userInput, triggerRequests)
  - formatQuery.js
    - format user's query string
      - trim white space
      - remove upper case,
      - remove special characters

  - request.js
    - make xhr request
    - handle response (calling render function within onreadystatechange)
  - render.js
    - render response into DOM elements

### Server side
  - index.js
    - starts the server by calling server module function
  - server.js
    - create server listener.
    - redirects to router module.
  - router.js
    - redirect to searchHandler
  - searchHandler.js
    - file system method reads dictionary file
    - filters out results into a return object (JSON)
    - res.end(returnObject)
    - return to onreadystatechange in request.js (clientside).

### Server-side testing
- search string - vs - expected results
- Result array.length < 7
- No special characters
- Request type (string) - vs - Result type (object/array)


### log
- Created index.html and main.css
- Linked userListener.js file script link
- Created userListener keyup eventListener to initially console.log() the key pressed
- Initialised index.js as a main server file and it includes server.js's start function
- Used `module.exports` to export the start function to the index.js
