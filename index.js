let express = require("express");
let app = express();
let async = require('express-async-await');
let fetch = require('node-fetch');



function postDataToFirebase(currency1, currency2){

    // Add a new document in collection "cities"
db.collection(collection).doc(`${currency1}${currency2}`).set({
    // name: "Los Angeles",
    // state: "CA",
    // country: "USA"
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});

}

async function getDataFromApi(currency1, currency2) {

    var url = `https://api.exchangeratesapi.io/latest?base=${currency1}&symbols=${currency2}`;

    return fetch(url, { "method": "GET", }).then((result) => {
        return result.json();
    }).then(resultJson => {
        return resultJson;
    })
    .catch((err) => {
        console.log(err)
    });
}

