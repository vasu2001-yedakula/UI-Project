var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var response = {};
    if(req.session.isUserLoggedin) {
        response.isUserLoggedin = true;
    } else {
        response.isUserLoggedin = false;
    }
    res.send(JSON.stringify(response));
});

module.exports = router;
