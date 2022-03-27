var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Task 3.1
var timestamp;
router.get('/last.txt', function(req, res, next) {
  if (timestamp) res.send(String(timestamp));
  else res.send();
  const currentDate = new Date;
  timestamp = currentDate.getTime();
});

// Task 3.2
var counter = 0;
router.get('/color.html', function(req, res, next) {
  var color;
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
    <style>
      h1 {
        color: ${color};
      }
    </style>
    <head>
        <title>Task 3.2</title>
    </head>
    <body>
        <h1>${color}</h1>
    </body>
    </html>
  `);
});

module.exports = router;
