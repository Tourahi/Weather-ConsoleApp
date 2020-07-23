const request = require('request');
const geocode = require('./utils/geocode.js');

const cityId = '6546896';
const appId  = '4434527c45696671cb74d7fc3317bc35'
const accTk  = 'pk.eyJ1IjoibWFyb21hcm94ZCIsImEiOiJja2N3OGptNjUwYjhwMnBtanRud2I4cG80In0.xiZ9PCRiKkCoxgYPIOiqpg';

// request({url : mapUrl , json : true},(error, response, body) => {
//     // console.log(body.features[3]);
//     let lat = body.features[0].center[1];
//     let lon = body.features[0].center[0];
//
//     const OWurl  = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${appId}`;
//
//     request({url : OWurl , json : true},(error, response, body) => {
//       console.log('City : ' + city);
//       console.log('Temp : ' + body.main.temp);
//     });
// });

geocode('Boston' , (err , data) => {
  console.log(err);
  console.log(data);
});
