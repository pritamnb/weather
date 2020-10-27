// Import all external modules
const express = require('express');
const morgan = require('morgan');
const app = express();
var fs = require('fs');
var path = require('path');
const PORT = process.env.PORT || 5000;

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, enctype'
  );
  next();
});
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }));
require('./startup/db')();
require('./startup/routes')(app);

//Start server
app.listen(PORT);

console.log('server is running at port :' + PORT);
