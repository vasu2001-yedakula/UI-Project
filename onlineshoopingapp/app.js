var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
 var userValidationRouter = require("./routes/userValidation");
var productDetailsRouter = require("./routes/getProductDetails");
var addProductDetails = require("./routes/addProductData");
var uploadResource = require("./routes/uploadResource");
var newUserSignup = require("./routes/newUserSignup");
var isUserLoggedin = require("./routes/isUserLoggedin");
var logoutUser = require("./routes/logoutUser");
const { Server } = require('http');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/validate/userCredentials', userValidationRouter);
app.use("/get/productDetails", productDetailsRouter);
app.use("/add/newProductDetails", addProductDetails);
app.use("/upload/productImage", uploadResource);
app.use("/signupNewUser", newUserSignup);
app.use("/isUserLoggedin", isUserLoggedin);
app.use("/logoutUser", logoutUser); 

app.listen(8081,()=>{
  console.log("server is listening at 8081");
  });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
