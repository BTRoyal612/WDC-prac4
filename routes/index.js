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
  timestamp = new Date;
});

// Task 3.2
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


// Task 3.3
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

// Task 4.2
var counter2 = 0;
router.get('/color.txt', function(req, res, next) {
  var color2 = "";
  switch (counter2%4) {
    case 1:
      color2 = "yellow";
      break;

    case 2:
      color2 = "green";
      break;

    case 3:
      color2 = "blue";
      break;

    default:
      color2 = "red";
  }
  counter2++;

  res.send(color2);
});

// Task 4.3
var views2 = [];
router.get('/log.json', function(req, res, next) {
  var currentDate = new Date;
  views2.push(String(currentDate));
  res.send(JSON.stringify(views2));
});

router.get('/log-ro.json', function(req, res, next) {
  res.send(JSON.stringify(views2));
});

// Task 4.4
router.get('/contact.ajax', function(req, res, next) {
  res.send('<a href="mailto: gb.hoang02@gmail.com">Send email</a>');
});

router.get('/search.ajax', function(req, res, next) {
  res.send('<input type="text"><button>Search</button>');
});

module.exports = router;
