let express = require("express");
let app = express();
let async  = require('express-async-await');
let fetch = require('node-fetch');


 function putData(name, doc) {

    db.collection(name).doc(doc).set({
      
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    test.firestore.js
    
   
  
}

 
