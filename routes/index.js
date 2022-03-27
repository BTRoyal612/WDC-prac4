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
  timestamp = new Date;
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

var views = "";
router.get('/log.html', function(req, res, next) {
  var currentDate = new Date;
  if (views == "") views += currentDate;
  else views += "," + currentDate;
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
      <head>
          <title>Task 3.3</title>
      </head>
      <body>
          <ul id="time-list"></ul>
          <script>
            var list = document.getElementById("time-list");
            var views = "${views}";
            var array = views.split(",");

            for (let e of array) {
              var etime = document.createElement("li");
              etime.appendChild(document.createTextNode(e));
              list.appendChild(etime);
            }
          </script>
      </body>
  </html>`);
});

module.exports = router;
