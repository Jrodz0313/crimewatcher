function getBookingData () {  

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': ''
        }
    };
    
    fetch('https://apidojo-booking-v1.p.rapidapi.com/currency/get-exchange-rates?base_currency=USD&languagecode=en-us', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

getBookingData()

var currentLong;
var currentLat;



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f952658629msh7726f90b2b0366fp176658jsn9a988e1b126b',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

function getDestinationId(location) {
    const locale = "en-us"
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f952658629msh7726f90b2b0366fp176658jsn9a988e1b126b',
            'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
        }
    };
    
    var searchLocationsUrlString = "https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=en-us&name=" + location
    
    fetch(searchLocationsUrlString, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    console.log(response)
    var result = JSON.parse(response)
    var destinationId = result[0].destinationId
    console.log(destinationId)
    // get destinatioId extracted 
    return destinationId
  }


  

getDestinationId("test")

    fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/countries', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


    


let button = document.getElementById("get-location");

// Get current location 
function getLocation() {

    navigator.geolocation.getCurrentPosition((position) => {
    currentLat = position.coords.latitude;
    // console.log("🚀 ~ file: script.js:6 ~ navigator.geolocation.getCurrentPosition ~ lat", lat)
    currentLong = position.coords.longitude;        
    // console.log("🚀 ~ file: script.js:8 ~ navigator.geolocation.getCurrentPosition ~ long", long)
    });
}

button.addEventListener("click", () => {
    
    var apiUrl = 'http://api.openweathermap.org/geo/1.0/reverse?lat='
    + currentLat + '&lon=' + currentLong + '&appid=e97ee8621afbdf55e3cfc6d7bc09d848'

getElementById()

    fetch(apiUrl)
        .then(function (response) {
        console.log(response)
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
});




// Get user's location after page loads
getLocation();
