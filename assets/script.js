// Global variables

var weatherApiKey = "aca54910fb4838e78fe21b03858e5b41";
var mainImage = document.getElementById("main-image");
var cityName = document.getElementById("city-name");
var dropDownButton = document.getElementById("dropdown-btn")
var submitButton = document.getElementById("submit-btn");

var temp = document.getElementById("temp");
var weather = document.getElementById("weather");
var wind = document.getElementById("wind");


// LOCATION SEARCH: 
//1- input when we write the city names 



//ATRACTION TYPE DROPDOWN
// 2-List with attraction options
let options;
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });

// BUTTON SUBMIT
//3- Hit to get the results in the index2.hmtl

submitButton.addEventListener('click',currentWeather);


// CURRENT WEATHER API

function currentWeather(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName.value+'&appid=aca54910fb4838e78fe21b03858e5b41')
    .then(response => response.json())
    .then(data => {
        var tempValue = data['main']['temp']; //Temp from API
        var weatherValue = data['main']; // weather from API
        var windValue = data['wind']['speed']; //wind from API

        temp.innerHTML = tempValue;
        weather.innerHTML = weatherValue;
        wind.innerHTML = windValue;
        console.log(data);
    })

.catch(err => alert("Wrong city name"));    
}



// RESULTS