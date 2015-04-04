var tessel = require('tessel');
var request = require('superagent');
var infraredlib = require('ir-attx4');
var infrared = infraredlib.use(tessel.port['A']);

var led1 = tessel.led[0];

function updateStatus() {
  setTimeout(function() {
    console.log('Updating...');
    request.get('http://solari.azurewebsites.net/status').end(function(err, res) {
      console.log(err);
      console.log(res.text);
      var status = JSON.parse(res.text);
      if (status) {
        led1.output(1);
      } else {
        led1.output(0);
      }
      updateStatus();
    });
  }, 300);
}

// If we get data, print it out
infrared.on('data', function(data) {
  if (data.length === 134) {
    console.log('toggle');
    request.post('http://solari.azurewebsites.net/toggle').end(function(err, res) {
      console.log('Toggled!');
    });
  }
});

tessel.port['GPIO'].pwmFrequency(980);

var pos = 0;
setInterval(function() {
  var pin = tessel.port['GPIO'].pin['G4'];
  pin.pwmDutyCycle(pos);
  pos += 0.01;
}, 500);

updateStatus();
