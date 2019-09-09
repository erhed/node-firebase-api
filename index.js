let express = require("express");
let app = express();
let async = require('express-async-await');
let fetch = require('node-fetch');



function postDataToFirebase(currency1, currency2){

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

