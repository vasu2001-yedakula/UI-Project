var express = require('express');
var router = express.Router();
const { MongoClient } = require("mongodb");
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
var productData = {};
/* GET home page. */
router.post('/', function(req, res, next) {
    productData = req.body;
    var responseData = {};
    console.log(req.body);
    connectToDb()
    .then((document) => {
        console.log("responseDAta")
        console.log(responseData);
        responseData.msg = 'product added successfly';
        res.send(JSON.stringify(responseData));
    }, (error) => {
        console.lo
    });    
});

async function connectToDb() {
    console.log("frm connect to db")
    // Use connect method to connect to the server
    await client.connect();    
    const db = client.db("onlineshopping");
    const collection = db.collection('porductDetails');
    console.log("collection1");
    console.log(collection);
    console.log('req.body')
    console.log(productData);
    productData.rating
    collection.insertOne(productData).then((response) => {
        console.log('response')
        console.log(response)
        
        return response;
    })
    // var response1 = collection.insertOne(req.body).then((response) => {
    //     console.log("inside response");
    //     console.log(response);
    //     return response;
    // }, (error) => {
    //     console.log(error)
    // });
    // console.log("response1");
    // console.log(response1);
    // return response1;
    
}

module.exports = router;
