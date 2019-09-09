let express = require("express");
let app = express();
let async  = require('express-async-await');
let fetch = require('node-fetch');



 function putData(collection, currency1, currency2) {

    db.collection(collection).doc(`${currency1}${currency2}`).set({

      
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    test.firestore.js
    
   
  
}

 
