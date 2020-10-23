const express = require('express');
const router = express.Router();
const config = require('../config/config');
const axios = require('axios');
const url =
  'http://api.openweathermap.org/data/2.5/forecast?q=Pune&45&mode=json&appid=617ce57175c8125f253caeb9bda6a506';

const getData = async (url) => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
router.get('/test', async (req, res) => {
  res.status(200).send({ msg: 'You just hit testing API' });
});
router.get('/day/:date', async (req, res) => {
  const weather = await getData(url);
  const sorted = await weather.list.filter((data) =>
    data.dt_txt.includes(req.params.date)
  );
  if (weather) {
    res.status(200).send({ sorted });
  }
});
module.exports = router;
