const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

var stdin = process.openStdin();


stdin.on("data", function(data) {
  console.log(data);
  let adr = data.toString().trim();
  if(adr) {
    geocode(adr , (err , data) => {
      if(err) {
        console.log(err);
      }
      else {
        forecast(data , (err , resp) => {
          if (err) {
            console.log(err);
          }
          else {
            console.log('City : ' + resp.name);
            console.log('Current Temp : ' + resp.temp);
          }
        });
      }
    });
  }
  else {
    console.log('Please provide a location (City).' );
  }
});
