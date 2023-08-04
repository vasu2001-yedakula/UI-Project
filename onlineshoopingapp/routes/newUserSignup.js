var express = require('express');
var router = express.Router();
const { MongoClient } = require("mongodb");
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
var userInputDetails = {};
var responseObj = {};

/*const bcrypt = require('bcrypt');
const saltRounds = 10;
const secreatcode = 'vasu';
bcrypt.hash(secreatcode, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    console.log("has code / encrypted msg" + hash)
}); */



/* GET home page. */
router.post('/', function(req, res, next) {
    userInputDetails = req.body;

    connectToDb()
    .then((responseCount) => {
         if (responseCount == 'Success') {
            responseObj.msg = 'success';
        } else {
            responseObj.msg = 'Failed';
        }
        res.send(JSON.stringify(responseObj));
    })
     .catch(console.error)
     .finally(() => {
        //client.close();
        console.log("finally done")
    });
});

async function connectToDb() {
     // Use connect method to connect to the server
     await client.connect();    
     const db = client.db("onlineshooping");
     const collection = db.collection('userAccountDetails');
    collection.insertOne(userInputDetails).then(() => {
        return 'Success'
    })
}

module.exports = router;
  
