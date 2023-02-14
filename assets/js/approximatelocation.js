/**
 * Get approximate location
 * source https://www.geolocation-db.com/documentation
 * @param {object} data 
 */

function callback(data) {
    getResultsByCoordinates(data.latitude, data.longitude);
}


var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://geolocation-db.com/jsonp';
var h = document.getElementsByTagName('script')[0];
h.parentNode.insertBefore(script, h);


