let express = require("express");
let app = express();
let async = require('express-async-await');
let fetch = require('node-fetch');
var firebase = require('firebase');

// Firebase config

var firebaseConfig = {
    apiKey: "AIzaSyCMxK2gLdb7KFtBuAc_T1OAAadutg-YQY0",
    authDomain: "currency-api-3c271.firebaseapp.com",
    databaseURL: "https://currency-api-3c271.firebaseio.com",
    projectId: "currency-api-3c271",
    storageBucket: "",
    messagingSenderId: "996034716897",
    appId: "1:996034716897:web:b86a3fabe2303b770883a0"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const collection = "CurrencyPrices";

// Functions

function putData(currency1, currency2, json) {

    db.collection(collection).doc(`${currency1}${currency2}`).set({
        json: json,
        date: getDate()
    })
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}

async function getDataFromFirebase(currency1, currency2) {
    return new Promise((resolve, reject) => {
        let fireBaseData = db.collection(collection).doc(`${currency1}${currency2}`);
        let getDoc = fireBaseData.get()
            .then(doc => {
                if (!doc.exists) {
                    reject("error");
                } else {
                    resolve(doc.data());
                }
            }).catch(err => {
                reject(err);
            });
    });
}
function getDate() {
    let date = new Date();
    let day = date.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    let year = date.getFullYear();
    return year + "-" + month + "-" + day;

}



function deleteData(currency1, currency2) {
    db.collection(collection).doc(`${currency1}${currency2}`).delete().then(function () {
        console.log(`Document ${docToDelete} successfully deleted!`);
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    })
}

function postDataToFirebase(currency1, currency2, json) {

    // Add a new document in collection "cities"
    db.collection(collection).doc(`${currency1}${currency2}`).set({
        json: json,
        date: getDate()
    })
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });

}

async function getDataFromApi(currency1, currency2) {

    var url = `https://api.exchangeratesapi.io/latest?base=${currency1}&symbols=${currency2}`;

    return fetch(url, { "method": "GET", }).then((result) => {
        return result.json();
    }).then(resultJson => {
        console.log(resultJson);
        return resultJson;
    })
        .catch((err) => {
            console.log(err)
        });
}

app.get('/', async function (req, res) {
    // let json = await getDataFromApi("USD", "JPY");
    // console.log(json);

    // postDataToFirebase("USD", "SEK", "Hello");
    // let data = await getDataFromFirebase("USD", "SEK").then(resp =>{
    await getDataFromFirebase("USD", "SEK").then(resp => {
        console.log(resp);
    });
    // });
    // console.log(data);
    //postDataToFirebase("USD","JPY", JSON.stringify(json));
    //deleteData("USD", "JPY");
    //getDataFromFirebase("USD", "SEK");
    //putData("USD","SEK","prutt");

    res.status(200).send("lol");
});

// app.get('/:currencyPair',(request, response) => {

//     let currencyPair = req.params.currenyPair;
//     let currency1 = currencyPair.slice(0, 3);
//     let currency2 = currencyPair.slice(3, 6);
//     let firebaseResponse = getDataFromFirebase(currency1, currency2);

//     if (firebaseResponse == null) {
//         getDataFromApi(currency1, currency2);
//     }
//     // if (doc.exists) {
//     //     getDataFromFirebase();
//     // } else {
//     //     getDataFromApi();
//     // }
// })

app.listen(3000, function () {
    console.log('Running on port 3000');
})