const { response } = require("express");
var express = require("express"); 
const { MongoClient } = require("mongodb");         

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
var responseObj = {};
var router = express.Router();
var userInput;
router.post('/', (req, res) => {   
     userInput = req.body;
     connectToDb()
     .then((responseCount) => {        
        if (responseCount == 1) {
             responseObj.msg = 'Valid';
             } else {
             responseObj.msg = 'Invalid';
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
    var count = collection.countDocuments({accountId: userInput.accountId, password: userInput.password});

    return count;
    
}
  
 
module.exports = router;
