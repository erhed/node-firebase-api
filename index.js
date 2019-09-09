let express = require("express");
let app = express();
let async  = require('express-async-await');
let fetch = require('node-fetch');


 function putData(currency1, currency2 ) {
    var url = `https://api.exchangeratesapi.io/latest?base=${currency1}&symbols=${currency2}`;
   
    fetch(url, { "method": "PUT", }).then((result) => {
        console.log(result.body)
    }).catch((err) => {
        console.log(err)
    });
    

}

 
 app.listen(3000, function(){

    console.log("RUNNING");
    
});