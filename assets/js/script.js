var currentLong;
var currentLat;

function getDestinationId(location) {
  //   const locale = "en-us";

  var searchLocationsUrlString =
    "https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=en-us&name=" +
    location;

  var listingContainer = document.getElementById("page-listings");

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f952658629msh7726f90b2b0366fp176658jsn9a988e1b126b",
      "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
    },
  };

  fetch(searchLocationsUrlString, options)
    .then((response) => {
      console.log(response);
      if (!respone.ok) {
        return null;
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => console.error(err));

  // // console.log(response)
  // var result = JSON.parse(response)
  // var destinationId = result[0].destinationId
  // console.log(destinationId)
  // // get destinatioId extracted

  //   console.log(destinationId);
  //   // get destinationId extracted
  //   return destinationId;
}

// function displayData() {
// const data =

// }

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

// Get current location
function getLocation(runGetResults = false) {
  navigator.geolocation.getCurrentPosition((position) => {
    currentLat = position.coords.latitude;
    console.log(
      "🚀 ~ file: script.js:6 ~ navigator.geolocation.getCurrentPosition ~ lat",
      currentLat
    );
    currentLong = position.coords.longitude;
    console.log(
      "🚀 ~ file: script.js:8 ~ navigator.geolocation.getCurrentPosition ~ long",
      currentLong
    );
    if (runGetResults) {
      getResultsByCoordinates(currentLat, currentLong);
    }
  });
}

// Get location id to pass to booking API to get list of preperties in the area
function getResultsByCoordinates(lat, long) {
  // API call using coordinates
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "fe32bd232cmsh314f416fc05e978p120522jsn3a47d3a556d5",
      "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
    },
  };

  fetch(
    "https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates?longitude=" +
      long +
      "&filter_by_currency=AED&room_number=1&locale=en-gb&latitude=" +
      lat +
      "&order_by=popularity&units=metric&checkin_date=2023-07-15&adults_number=2&checkout_date=2023-07-16&page_number=0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&children_number=2&include_adjacency=true&children_ages=5%2C0",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      // Pass each listing to a function that will handle page formatting
      console.log(response);
      clearListings();
      response.result.forEach((element) => {
        displayListing(element);
      });
    })
    .catch((err) => console.error(err));
}

button.addEventListener("click", () => {
  if (!currentLat || !currentLong) {
    getLocation(true);
  } else {
    getResultsByCoordinates(currentLat, currentLong);
  }
});

// Get user's location after page loads
// getLocation();

// ___________________________________________

// Zip Code Search below___________________________________________

// By button...

// By pressing enter...
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

var zipSearch = document.getElementById("zip-search");

zipSearch.addEventListener("click", getCoordinatesByZip);

usZip.addEventListener("keypress", getCoordinatesByZip);
function getCoordinatesByZip(event) {
  // If the user presses the "Enter" key on the keyboard

  var search = document.getElementById("zipCodeInput").value;
  if (event.key === "Enter" || event.type === "click") {
    fetch(
      "https://api.openweathermap.org/geo/1.0/zip?zip=" +
        search +
        ",US&appid=3bd4d0000400054c55b2ea6f37ae66a9"
    )
      .then((response) => response.json())
      .then(function (data) {
        console.log(data);
        console.log(data.lat);
        console.log(data.lon);
        getResultsByCoordinates(data.lat, data.lon);
      });
  }
}

// Local Storage functionality
var searchHistory = JSON.parse(localStorage.getItem("locStor")) || [];
console.log(searchHistory);

function myFunction(event) {
  var viewedList = document.getElementById("demo");

  var textName = event.target.closest(".listingLink").textContent;

  var textLink = event.target.closest(".listingLink").getAttribute("href");

  var listObject = {
    name: textName,
    link: textLink,
  };

  var ul = document.createElement("ul");

  var listName = document.createElement("a");
  console.log(searchHistory);
  // searchHistory.push(textName);
  searchHistory.push(listObject);
  localStorage.setItem("locStor", JSON.stringify(searchHistory));
  // listName.setAttribute('href', event.target.closest('.listingLink').href);
  listName.setAttribute("href", textLink);
  listName.setAttribute("target", "_blank");
  listName.innerHTML = textName;

  ul.appendChild(listName);
  viewedList.appendChild(ul);
}

function init() {
  for (var i = 0; i < searchHistory.length; i++) {
    var listName = document.createElement("a");
    var ul = document.createElement("ul");
    listName.innerHTML = searchHistory[i].name;
    listName.setAttribute("target", "_blank");
    // listName.setAttribute('href', 'https://www.booking.com');
    listName.setAttribute("href", searchHistory[i].link);
    ul.appendChild(listName);
    var viewedList = document.getElementById("demo").append(ul);
    if (i === 10) {
      return;
    }
  }
}

init();
