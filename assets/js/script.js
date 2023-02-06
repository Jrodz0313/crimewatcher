let button = document.getElementById("get-location");

button.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        console.log("🚀 ~ file: script.js:6 ~ navigator.geolocation.getCurrentPosition ~ lat", lat)
        let long = position.coords.longitude;        
        console.log("🚀 ~ file: script.js:8 ~ navigator.geolocation.getCurrentPosition ~ long", long)

        // var apiUrl = 'http://api.openweathermap.org/geo/1.0/reverse?lat=51.5098&lon=-0.1180&limit=5&appid=e97ee8621afbdf55e3cfc6d7bc09d848'

        var apiUrl = 'http://api.openweathermap.org/geo/1.0/reverse?lat='
        + lat + '&lon=' + long + '&appid=e97ee8621afbdf55e3cfc6d7bc09d848'

        fetch(apiUrl)
            .then(function (response) {
            console.log(response)
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
        




        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'fe32bd232cmsh314f416fc05e978p120522jsn3a47d3a556d5',
                'X-RapidAPI-Host': 'jgentes-Crime-Data-v1.p.rapidapi.com'
            }
        };
        
        fetch('https://jgentes-crime-data-v1.p.rapidapi.com/crime?startdate=9%2F19%2F2015&enddate=9%2F25%2F2015&long='
            + long + '&lat=' + lat + ',' + options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));




        // console.log(long)
        // console.log(lat)
    });
});




// fetch(locQueryUrl)
//     .then(function (response) {
//       if (!response.ok) {
//         throw response.json();
//       }

//       return response.json();
//     })
//     .then(function (locRes) {
//       // write query to page so user knows what they are viewing
//       resultTextEl.textContent = locRes.search.query;

//       console.log(locRes);

//       if (!locRes.results.length) {
//         console.log('No results found!');
//         resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
//       } else {
//         resultContentEl.textContent = '';
//         for (var i = 0; i < locRes.results.length; i++) {
//           printResults(locRes.results[i]);
//         }
//       }
//     })
//     .catch(function (error) {
//       console.error(error);
//     });