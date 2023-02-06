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