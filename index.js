let express = require("express");
let app = express();
let async  = require('express-async-await');
let fetch = require('node-fetch');

function deleteData(docToDelete){
    db.collection(collection).doc(docToDelete).delete().then(function() {
        console.log(`Document ${docToDelete} successfully deleted!`);
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    })
}