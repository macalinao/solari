
var tessel = require('tessel');
var infraredlib = require('ir-attx4');
var infrared = infraredlib.use(tessel.port['A']);

var led1 = tessel.led[0].output(1);

// If we get data, print it out
infrared.on('data', function(data) {
  if (data.length === 134) {
    console.log('toggle');
    led1.toggle();
  }
});

