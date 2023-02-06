var currentLong;
var currentLat;

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
