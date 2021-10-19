const request = require('request')
const forecast = (latitude, longitude, callback)=>{
const url = "http://api.weatherstack.com/current?access_key=fa444a195a54e6380452bc83fb9b9e62&query="+latitude+","+longitude+"&units=m";
request({ url, json: true }, (error, {body}) => {
if (error) {
    callback('Unable to connect to weather services!', undefined)
  } else if(body.error){
      callback('Unable to find location, try again!', undefined)
  } else {
    callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out there. It feels like " + body.current.feelslike +" degrees and there is a " +body.current.precip +"% of chance of precipitation.");
  }
});
}
module.exports =  forecast; 