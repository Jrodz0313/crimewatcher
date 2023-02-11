function getBookingData() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "",
    },
  };

  fetch(
    "https://apidojo-booking-v1.p.rapidapi.com/currency/get-exchange-rates?base_currency=USD&languagecode=en-us",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}

getBookingData();

var currentLong;
var currentLat;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f952658629msh7726f90b2b0366fp176658jsn9a988e1b126b",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

function getDestinationId(location) {
//   const locale = "en-us";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f952658629msh7726f90b2b0366fp176658jsn9a988e1b126b",
      "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
    },
  };

  var searchLocationsUrlString =
    "https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=" +
    "en-us" +
    "&name=" +
    location;

  fetch(searchLocationsUrlString, options)
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.error(err));
  //   console.log(response);
  //   var result = JSON.parse(response);
  //   var destinationId = result[0].destinationId;
  //   console.log(destinationId);
  //   // get destinationId extracted
  //   return destinationId;
}

function handleCityChange(event) {
  event.preventDefault();
  console.log(event.target);

  if (event.target.textContent) {
    event.target.value = event.target.textContent;
    const options = getDestinationId(event.target.value);
    console.log(event.target.value);
    console.table(options);
    return options ? options : null;
  }
}

const cityInput = document.querySelector(".input");

function handleSubmitSearch(event) {
  event.preventDefault();
  const { children } = event.target;
  console.log(children);
  if (cityInput.textContent) {
    console.log(cityInput.textContent);
    cityInput.value = cityInput.textContent;
    getDestinationId(cityInput.value);
    // children.forEach((child, index) => {
    //     console.log(child)
    // })
  }
}
//

getDestinationId("test");

fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/countries", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

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
  var apiUrl =
    "http://api.openweathermap.org/geo/1.0/reverse?lat=" +
    currentLat +
    "&lon=" +
    currentLong +
    "&appid=e97ee8621afbdf55e3cfc6d7bc09d848";

  getElementById();

  fetch(apiUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
});

// Get user's location after page loads
getLocation();

// ___________________________________________

var usZip = document.getElementById("zipCodeInput");

usZip.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  var search = document.getElementById("zipCodeInput").value;
  if (event.key === "Enter") {
    console.log(search);

    fetch(
      "http://api.openweathermap.org/geo/1.0/zip?zip=" +
        search +
        ",US&appid=3bd4d0000400054c55b2ea6f37ae66a9"
    )
      .then((response) => response.json())
      .then(function (data) {
        console.log(data);
      });
    event.preventDefault();
  }
});

{
  /* <table class="table">
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
</table> */
}
