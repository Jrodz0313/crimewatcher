var currentLong;
var currentLat;

var tempResponseObject = [
  {
      "image_url": "https://cf.bstatic.com/xdata/images/city/150x150/887988.jpg?k=a2602813378d1b274f45b538edcdcef7931e6918e43dbfdc5c254c6f480c231b&o=",
      "region": "New Jersey",
      "cc1": "us",
      "hotels": 2,
      "city_name": "Trenton",
      "rtl": 0,
      "nr_hotels": 2,
      "label": "Trenton, New Jersey, United States",
      "lc": "en",
      "name": "Trenton",
      "longitude": -74.7433,
      "dest_id": "20082688",
      "b_max_los_data": {
          "extended_los": 90,
          "max_allowed_los": 90,
          "is_fullon": 0,
          "has_extended_los": 1,
          "experiment": "long_stays_android_extend_los_2",
          "default_los": 45
      },
      "timezone": "America/New_York",
      "dest_type": "city",
      "latitude": 40.2169,
      "country": "United States",
      "city_ufi": null,
      "type": "ci"
  },
  {
      "type": "ci",
      "city_ufi": null,
      "country": "United States",
      "latitude": 44.4389,
      "dest_type": "city",
      "timezone": "America/New_York",
      "b_max_los_data": {
          "extended_los": 90,
          "max_allowed_los": 90,
          "default_los": 45,
          "experiment": "long_stays_android_extend_los_2",
          "has_extended_los": 1,
          "is_fullon": 0
      },
      "dest_id": "20053268",
      "longitude": -68.3706,
      "name": "Trenton",
      "lc": "en",
      "nr_hotels": 23,
      "label": "Trenton, Maine, United States",
      "rtl": 0,
      "city_name": "Trenton",
      "image_url": "https://cf.bstatic.com/xdata/images/city/150x150/891987.jpg?k=b107e880e6f51b78cd205c4d43a5eef296541dc9afb3a93a22e2d0f3d5e44545&o=",
      "region": "Maine",
      "hotels": 23,
      "cc1": "us"
  },
  {
      "latitude": 44.10331,
      "timezone": "America/Toronto",
      "dest_type": "city",
      "city_ufi": null,
      "type": "ci",
      "country": "Canada",
      "dest_id": "-574958",
      "longitude": -77.57589,
      "b_max_los_data": {
          "max_allowed_los": 90,
          "extended_los": 90,
          "has_extended_los": 1,
          "experiment": "long_stays_android_extend_los_2",
          "default_los": 45,
          "is_fullon": 0
      },
      "lc": "en",
      "name": "Trenton",
      "hotels": 9,
      "image_url": "https://cf.bstatic.com/xdata/images/city/150x150/944306.jpg?k=3aa03c71d08d325db23019bc550ad23d9a96578b580303674664bd7c4cd1100d&o=",
      "region": "Ontario",
      "cc1": "ca",
      "rtl": 0,
      "label": "Trenton, Ontario, Canada",
      "nr_hotels": 9,
      "city_name": "Trenton"
  },
  {
      "dest_id": "20030213",
      "longitude": -85.5092,
      "b_max_los_data": {
          "max_allowed_los": 90,
          "extended_los": 90,
          "has_extended_los": 1,
          "experiment": "long_stays_android_extend_los_2",
          "default_los": 45,
          "is_fullon": 0
      },
      "latitude": 34.8719,
      "dest_type": "city",
      "timezone": "America/New_York",
      "type": "ci",
      "city_ufi": null,
      "country": "United States",
      "cc1": "us",
      "region": "Georgia",
      "hotels": 6,
      "label": "Trenton, Georgia, United States",
      "nr_hotels": 6,
      "rtl": 0,
      "city_name": "Trenton",
      "lc": "en",
      "name": "Trenton"
  },
  {
      "name": "Trenton",
      "lc": "en",
      "rtl": 0,
      "label": "Trenton, South Carolina, United States",
      "nr_hotels": 2,
      "city_name": "Trenton",
      "region": "South Carolina",
      "hotels": 2,
      "cc1": "us",
      "city_ufi": null,
      "type": "ci",
      "country": "United States",
      "latitude": 33.7439,
      "timezone": "America/New_York",
      "dest_type": "city",
      "b_max_los_data": {
          "experiment": "long_stays_android_extend_los_2",
          "has_extended_los": 1,
          "default_los": 45,
          "is_fullon": 0,
          "extended_los": 90,
          "max_allowed_los": 90
      },
      "dest_id": "20118950",
      "longitude": -81.8408
  }
]

function getDestinationId(location) {
  //   const locale = "en-us";

  var searchLocationsUrlString =
    "https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=en-us&name=" +
    location;

  var listingContainer = document.getElementById("page-listings");

  const options = {
    method: "GET",
    headers: {
      //"X-RapidAPI-Key": "f952658629msh7726f90b2b0366fp176658jsn9a988e1b126b",
      "X-RapidAPI-Key": "fe32bd232cmsh314f416fc05e978p120522jsn3a47d3a556d5", // need new api key from jasiah
      "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
    },
  };

  //getResultsByCoordinates(tempResponseObject[0].latitude,tempResponseObject[0].longitude)
  //return

  fetch(searchLocationsUrlString, options)
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        return null;
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      getResultsByCoordinates(data[0].latitude,data[0].longitude)
      //return data;
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
  console.log(event);

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
  console.log(cityInput)
  console.log(cityInput.textContent)
  console.log(cityInput.value)
  
  
  if (cityInput.value) {
    console.log(cityInput.value);
   // cityInput.value = cityInput.textContent;
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
