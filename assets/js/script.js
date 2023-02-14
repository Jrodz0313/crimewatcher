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
            response.result.forEach(element => {
                displayListing(element);
            });
        })
        .catch(err => console.error(err));
}



// Add each lisitng to page
function displayResults(listing) {
    
    // Listing Card prototype
    var imageSource = listing.max_photo_url;
    var hotelName = listing.hotel_name;
    var hotelAddress = listing.address;
    var hotelCity = listing.city;
    var hotelReviewScore = listing.review_score;
    var hotelReviewWord = listing.review_score_word;
    var hotelBookLink = listing.url;

    // Listing DOM Elements
    // Card container
    var listingObject = document.createElement('div');        
        listingObject.setAttribute('class', 'block has-background-dark');
        listingObject.innerHTML = hotelName;

    var listingImage
    // Listing card
    // var listingCard = document.createElement('div')
    //     listingCard.setAttribute('class', 'card');

    // // Lisitng card image
    // var listingImage = document.createElement('div')
    //     listingImage.setAttribute('class', 'card-image');
    //     // Append image container to listing card
    //     listingCard.appendChild(listingImage);

    // // Listing Title
    // var listingTitle = document.createElement
        
        
        // Append listing card to HTML container
        listingContainer.appendChild(listingObject);




}

button.addEventListener("click", () => {
    if (!currentLat || !currentLong) {
        getLocation();    
    }
    getResultsByCoordinates(currentLat, currentLong)
    
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
       "http://api.openweathermap.org/geo/1.0/zip?zip=" + search + ",US&appid=3bd4d0000400054c55b2ea6f37ae66a9"
      )
        .then((response) => response.json())
        .then(function (data) {
          console.log(data);
          console.log(data.lat);
          console.log(data.lon);
        });
      event.preventDefault();
    }
  });

// Local Storage functionality
// const visited = document.querySelector('.listingLink');
// const btnRemove = document.querySelector('#btnRemove');
// const listbox = document.querySelector('#list');

// visited.onclick = (e) => {
//   e.preventDefault();

//   // create a new option
//   const option = new Option(visited, visited);
//   // add it to the list
//   listbox.add(option, undefined);

// };

// // remove selected option
// btnRemove.onclick = (e) => {
//   e.preventDefault();

//   // save the selected options
//   let selected = [];

//   for (let i = 0; i < listbox.options.length; i++) {
//     selected[i] = listbox.options[i].selected;
//   }

//   // remove all selected option
//   let index = listbox.options.length;
//   while (index--) {
//     if (selected[index]) {
//       listbox.remove(index);
//     }
//   }
// };
var searchHistory = JSON.parse(localStorage.getItem('locStor')) || []
console.log(searchHistory);

function myFunction(event){
 
  var viewedList = document.getElementById('demo');

  var textName = event.target.closest('.listingLink').textContent;

  var textLink = event.target.closest('.listingLink').getAttribute('href');

  var listObject = {
    name: textName,
    link: textLink,
  }

  var li = document.createElement('li');

  var listName = document.createElement('a');
  console.log(searchHistory);
  // searchHistory.push(textName);
  searchHistory.push(listObject);
  localStorage.setItem('locStor', JSON.stringify(searchHistory));
  // listName.setAttribute('href', event.target.closest('.listingLink').href);
  listName.setAttribute('href', textLink);
  listName.setAttribute('target', '_blank');
  listName.innerHTML = textName;
  
  li.appendChild(listName);
  viewedList.appendChild(li);

}


function init() {
  for (var i = 0; i < searchHistory.length; i++) {
    var listName = document.createElement('a');
    var li = document.createElement('li');
    listName.innerHTML = searchHistory[i].name;
    // listName.setAttribute('href', 'https://www.booking.com');
    listName.setAttribute('href', searchHistory[i].link);
    li.appendChild(listName);
    var viewedList = document.getElementById('demo').append(li);
  }
}

// function storeTodos() {
//   // Stringify and set key in localStorage to todos array
//   localStorage.setItem("li", JSON.stringify(li));
// }


init()





