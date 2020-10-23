const express = require('express');
const bodyParser = require('body-parser');
const weather = require('../routes/weather');
module.exports = function (app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
  app.use('/api/weather', weather);
};
