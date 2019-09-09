let express = require("express");
let app = express();
let async = require('express-async-await');
let fetch = require('node-fetch');

function getDataFromApi(currency1, currency2) {

    var url = `https://api.exchangeratesapi.io/latest?base=${currency1}&symbols=${currency2}`;

    fetch(url, { "method": "GET", }).then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err)
    });
}

getDataFromApi("USD", "SEK");


app.get('/', function (req, res) {
    return res.send('hejhej');
});
