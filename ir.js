/*  SEE THE LAST 4 LINES DIRECTLY*/ 



var tessel = require('tessel');
var infraredlib = require('ir-attx4');
var infrared = infraredlib.use(tessel.port['A']);  

// When we're connected
infrared.on('ready', function() {
  if (!err) {
    console.log("Connected to IR!");
    // Start sending a signal every three seconds
    setInterval(function() {
      // Make a buffer of on/off durations (each duration is 16 bits)
      var powerBuffer = new Buffer([0x22,0xc4,0xee,0xd0,0x2,0x58,0xfe,0xc,0x2,0x8a,0xf9,0xf2,0x2,0x8a,0xf9,0xc0,0x2,0x58,0xfe,0xc,0x2,0x58,0xfe,0xc,0x2,0x8a,0xfe,0x3e,0x2,0x8a,0xfe,0x3e,0x2,0x8a,0xf9,0xc0,0x2,0x58,0xf9,0xc0,0x2,0x8a,0xfe,0x3e,0x2,0x8a,0xf9,0xc0,0x2,0x58,0xfe,0xc,0x2,0x58,0xfe,0xc,0x2,0x58,0xfe,0xc,0x2,0x58,0xfe,0xc,0x2,0x8a,0xfe,0x3e,0x2,0x8a,0xf9,0xc0,0x2,0x58,0xf9,0xc0,0x2,0x8a,0xf9,0xf2,0x2,0x8a,0xf9,0xc0,0x2,0x58,0xfe,0xc,0x2,0x58,0xfe,0xc,0x2,0x8a,0xfe,0x3e,0x2,0x8a,0xfe,0x3e,0x2,0x8a,0xfe,0xc,0x2,0x58,0xfe,0xc,0x2,0x58,0xfe,0xc,0x2,0x58,0xfe,0xc,0x2,0x58,0xf9,0xc0,0x2,0x8a,0xf9,0xc0,0x2,0x58,0xf9,0xc0,0x2,0x58,0xf9,0xc0,0x2,0x58]); 
      // Send the signal at 38 kHz
      infrared.sendRawSignal(38, powerBuffer, function(err) {
        if (err) {
          console.log("Unable to send signal: ", err);
        } else {
          console.log("Signal sent!");
        }
      });
    }, 5000); // Every 3 seconds
  } else {
    console.log(err);
  }
});



console.log("I'm checking you in for security Thank you for patience!");

var led1 = tessel.led[0].output(0);
var led2 = tessel.led[1].output(0);


// If we get data, print it out
infrared.on('data', function(data) {
	console.log("Received RX Data: ", data);

///// TRY PLAYING WITH DATA    IF DATA IS EMPTY TOGGLE LED 1 otherwise LED 2
	
if  (data == '')
{
  led1.toggle();
}
else
{
  led2.toggle();
}
});

