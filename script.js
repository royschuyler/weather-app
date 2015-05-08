


var input = document.querySelector('input');
var btn = document.querySelector('button');
var btnLoc = document.querySelector('.locationBtn');
var zip;


btn.onclick = function() {
  var zip = input.value;

  var API_URL = 'http://api.wunderground.com/api/9608de0b18f9ff6f/conditions/geolookup/q/' + zip + '.json';

//********TEMPERATURE*******//
getJSON(API_URL, function (data) {
 


  var temp = document.querySelector('.temp');

  temp.innerHTML = data.current_observation.temperature_string;

})
}
/////*********LOCATION************///////

btnLoc.onclick = function() {
  var zip = input.value;

  var API_URL = 'http://api.wunderground.com/api/9608de0b18f9ff6f/conditions/geolookup/q/' + zip + '.json';


getJSON(API_URL, function (data) {


  var lat = document.querySelector('.lat');
  var long = document.querySelector('.long');
  var city =document.querySelector('.city');
  var state =document.querySelector('.state');
  var country =document.querySelector('.country');
  lat.innerHTML = data.location.lat;
  long.innerHTML = data.location.lon;
  city.innerHTML = data.location.city;
  state.innerHTML = data.location.state;
  country.innerHTML = data.location.country;
})
}



////**********END************///////
function getJSON(url, cb) {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', url);
  xhr.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      cb(JSON.parse(this.response));
    }
  };

  xhr.send();
}
