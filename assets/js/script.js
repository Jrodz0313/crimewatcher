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


var usZip = document.getElementById("zipCodeInput");

usZip.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    var search = document.getElementById("zipCodeInput").value;
    if (event.key === "Enter") {
      console.log(search);
      
      fetch(
       "http://api.openweathermap.org/geo/1.0/zip?zip=" + search + ",US&appid=3bd4d0000400054c55b2ea6f37ae66a9"
      )
        .then((response) => response.json())
        .then(function (data) {
          console.log(data);
  
        });
      event.preventDefault();
    }
  });


  
{/* <table class="table">
    <thead>
        <tr>
            <th><abbr title="Image">Pos</abbr></th>
            <th>Name</th>
            <th><abbr title="Review Score">Review Score/10</abbr></th>
            <th><abbr title="Average Price">Avg. Price per Night</abbr></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>1</th>
            <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
            </td>
            <td>3</td>
            <td>4</td>
        </tr>
    </tbody>
</table> */}