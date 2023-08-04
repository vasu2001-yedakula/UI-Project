var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {   

     
    
    req.session.isUserLoggedin = false;
    res.send({"satus": 'done'});
});

module.exports = router;
