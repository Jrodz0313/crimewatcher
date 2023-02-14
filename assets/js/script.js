var currentLong;
var currentLat;

var listingContainer = document.getElementById('page-listings')

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'f952658629msh7726f90b2b0366fp176658jsn9a988e1b126b',
// 		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
// 	}
// };

// fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/countries', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

    
//     function getDestinationId(location) {
//         const locale = "en-us"
        
//         const options = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': 'f952658629msh7726f90b2b0366fp176658jsn9a988e1b126b',
//                 'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
//             }
//         };
        
//         var searchLocationsUrlString = "https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=en-us&name=" + location
        
//         fetch(searchLocationsUrlString, options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
//         // console.log(response)
//         var result = JSON.parse(response)
//         var destinationId = result[0].destinationId
//         console.log(destinationId)
//         // get destinatioId extracted 
//         return destinationId
//         }
    
    
    
//     getDestinationId("test")
    
//         fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/countries', options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
    

    


let button = document.getElementById("get-location");

// Get current location 
function getLocation() {

    navigator.geolocation.getCurrentPosition((position) => {
    currentLat = position.coords.latitude;
    console.log("🚀 ~ file: script.js:6 ~ navigator.geolocation.getCurrentPosition ~ lat", currentLat)
    currentLong = position.coords.longitude;        
    console.log("🚀 ~ file: script.js:8 ~ navigator.geolocation.getCurrentPosition ~ long", currentLong)
    });
    
}


// Get location id to pass to booking API to get list of preperties in the area
function getResultsByCoordinates(lat, long) {
    
    // API call using coordinates
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fe32bd232cmsh314f416fc05e978p120522jsn3a47d3a556d5',
            'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
        }
    };
    
    fetch('https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates?longitude=' + long + '&filter_by_currency=AED&room_number=1&locale=en-gb&latitude=' + lat + '&order_by=popularity&units=metric&checkin_date=2023-07-15&adults_number=2&checkout_date=2023-07-16&page_number=0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&children_number=2&include_adjacency=true&children_ages=5%2C0', options)
        .then(response => response.json())
        .then(response => {
            // Pass each listing to a function that will handle page formatting
            console.log(response)
            clearListings();
            response.result.forEach(element => {
                displayListing(element);
            });
        })
        .catch(err => console.error(err));
}


button.addEventListener("click", function () {
    
    getLocation()
    setTimeout(getResultsByCoordinates(currentLat, currentLong), 2000);
    
});



// Get user's location after page loads
// getLocation();


// ___________________________________________

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