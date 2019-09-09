let express = require("express");
let app = express();
let async  = require('express-async-await');
let fetch = require('node-fetch');

function deleteData(docToDelete, currency1, currency2){
    db.collection(collection).doc(`${currency1}${currency2}`).delete().then(function() {
        console.log(`Document ${docToDelete} successfully deleted!`);
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    })
}