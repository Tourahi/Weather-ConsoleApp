const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

if(process.argv[2]) {
  geocode(process.argv[2] , (err , data) => {
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
