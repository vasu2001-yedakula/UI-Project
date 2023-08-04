var express = require('express');
var router = express.Router();
const { MongoClient } = require("mongodb");
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

router.get('/', function(req, res, next) {
    console.log("req.session.isUserLoggedin ");
    console.log(req.session.isUserLoggedin );
    console.log("from get product details.....")
    var pData = [];
    connectToDb()
    .then((response) => {
        var strObj = JSON.stringify(response);
        res.send(strObj);
    }, (error) => {

    })


    // res.send(JSON.stringify({data: 'hello'}));

    
});

async function connectToDb() {
    console.log("db connect")
    // Use connect method to connect to the server
    await client.connect();    
    const db = client.db("onlineshopping");
    const collection = db.collection('porductDetails');
   
    var document = collection.find({});  
    var resultData = await document.toArray();
    return resultData ;
}

module.exports = router;
