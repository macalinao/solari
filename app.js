var express = require('express');

var app = express();

app.use(express.static('public/'));

var status = false;

app.get('/status', function(req, res) {
  res.json(status);
});

app.post('/on', function(req, res) {
  status = true;
});

app.post('/off', function(req, res) {
  status = false;
});

app.post('/toggle', function(req, res) {
  status = !status;
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Listening on port ' + port);
});
