let express = require("express");
let app = express();
let async  = require('express-async-await');
let fetch = require('node-fetch');
var firebase = require('firebase');
var app = firebase.initializeApp();



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