let express = require("express");
let app = express();
let async = require('express-async-await');
let fetch = require('node-fetch');
var firebase = require('firebase');
var app = firebase.initializeApp();


function getDataFromFirebase(currency1, currency2) {

    let fireBaseData = db.collection(collection).doc(`${currency1}${currency2}`);
    let getDoc = fireBaseData.get()
        .then(doc => {
            if (!doc.exists) {
                console.log('No currency');
            } else {
                console.log('Document data:', doc.data());
            }
        }).catch(err => {
            console.log('Error getting currency', err);
        });
}

app.listen(3000, function () {
    console.log('Running on port 3000');
})

db.collection(collection).doc(`${currency1}${currency2}`);

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


  // GET
// ex: USD/SEK, priset för en dollar i kronor
// - kolla om datan redan finns i FIREBASE (kolla datum?)
// - finns den där skickar vi den till användaren
// - finns den inte ska vi göra en API call till externa APIn och skicka den datan till användaren OCH till firebase



