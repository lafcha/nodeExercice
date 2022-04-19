var weather = require('weather-js');
 
// Options:
// search:     location name or zipcode
// degreeType: F or C
 
weather.find({search: 'San Francisco, CA', degreeType: 'C'}, function(err, result) {
  if(err) console.log(err);
 
  console.log("Today's temperature in SF is : " + result[0].current.temperature + "°C, and the sky is " + result[0].current.skytext)
});