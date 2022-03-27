var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var timestamp;
router.get('/last.txt', function(req, res, next) {
  if (timestamp) res.send(String(timestamp));
  else res.send();
  timestamp = Date.now();
});

var counter = 0;
router.get('/color.html', function(req, res, next) {
  var color = "";
  switch (counter%4) {
    case 1:
      color = "yellow";
      break;

    case 2:
      color = "green";
      break;

    case 3:
      color = "blue";
      break;

    default:
      color = "red";
  }
  counter++;

  res.send(`
  <!DOCTYPE html>
  <html lang="en">
      <head>
          <title>Task 3.2</title>
          <style>
            h1 {
              color: ${color};
            }
          </style>
      </head>
      <body>
          <h1>${color}</h1>
      </body>
  </html>`);
});

module.exports = router;
