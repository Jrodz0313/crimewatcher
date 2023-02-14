const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  const base_amount = amountEl_one.value;
  
//Const options
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6c5257e293msha6d0e34c0af5a2fp1801f2jsnce7075ab5744',
		'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
	}
}

fetch('https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have='+currency_one+'&want='+currency_two+'&amount='+base_amount, options)
	.then(response => response.json())
	.then(function(response){
        amountEl_two.value=response.new_amount
    }) 
	.catch(err => console.error(err));
}

//Event Listener
swap.addEventListener('click', () => {
  
  calculate();
});

