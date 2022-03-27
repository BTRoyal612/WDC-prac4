var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var timestamp;
var currentDate = new Date();
router.get('/last.txt', function(req, res, next) {
  res.send(String(timestamp));
  timestamp = currentDate.getTime();
});

module.exports = router;
