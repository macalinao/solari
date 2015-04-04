var express = require('express');

var app = express();

app.use(express.static('public/'));

var status = false;

app.get('/status', function(req, res) {
  res.json(status);
});

app.post('/on', function(req, res) {
  status = true;
  res.json(1);
});

app.post('/off', function(req, res) {
  status = false;
  res.json(1);
});

app.post('/toggle', function(req, res) {
  status = !status;
  res.json(1);
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Listening on port ' + port);
});
