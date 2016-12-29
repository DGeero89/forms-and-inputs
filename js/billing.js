(function (){

	var form = document.getElementById('shipping-billing'),
			shippingFieldset = form.querySelector('#shipping'),
			billingFieldset = form.querySelector('#billing'),
			shippingFirstName = shippingFieldset.querySelector('#firstName'),
			shippingLastName = shippingFieldset.querySelector('#lastName'),
			nameFields = form.querySelectorAll('.name'),
			shippingAddress = shippingFieldset.querySelector('#address'),
			addressFields = form.querySelectorAll('.address'),
			shippingCountry = shippingFieldset.querySelector('#country'),
			countryFields = form.querySelectorAll('.country'),
			shippingCity = shippingFieldset.querySelector('#city'),
			cityFields = form.querySelectorAll('city'),
			shippingZip = shippingFieldset.querySelector('#zip'),
			zipFields = form.querySelectorAll('.zip'),
			checkbox = shippingFieldset.querySelector('#use-for-billing'),
			billingFirstName = billingFieldset.querySelector('#firstName'),
			billingLastName = billingFieldset.querySelector('#lastName'),
			billingAddress = billingFieldset.querySelector('#address'),
			billingCountry = billingFieldset.querySelector('#country'),
			billingCity = billingFieldset.querySelector('#city'),
			billingZip = billingFieldset.querySelector('#zip'),
			submit = form.querySelector('.submit');
	


	function validateName(element){

		var value = element.checked;

		if ( validator.isEmpty(value)) {
	  	element.setCustomValidity("Oops! Looks like you didn't enter anything. Please enter a valid first name at least 2 characters in length.");
	  } else if ( element.validity.tooShort) {
	  	element.setCustomValidity("Please enter a name 2 characters or longer!");
	  } else{
	  	element.setCustomValidity("");
	  }

	}

	function validateAddress(element){

		var input = element.value;
		
	  if ( validator.isEmpty(input) ) {
	   element.setCustomValidity("Oops! Looks like you didn't enter anything. Please enter a valid address");
	  } else if ( !validator.isAddress(input)) {
	  	element.setCustomValidity("Please enter a valid address");
	  } else{
	   element.setCustomValidity("");
	  }

	}

	function validateCountry(element){

		var input = element.value;

		if ( validator.isEmpty(input) || element.validity.tooShort) {
	  	element.setCustomValidity("Please enter a valid country.");
	  } else{
	  	element.setCustomValidity("");
	  }

	}

	function validateCity(element){

		var input = element.value;

		if ( validator.isEmpty(input) || element.validity.tooShort) {
	  	element.setCustomValidity("Please enter a valid city.");
	  } else{
	  	element.setCustomValidity("");
	  }

	}

	function validateZip(element){

		var input = element.value;

		console.log();
		if ( validator.isEmpty(input) || element.validity.tooShort || !Number(input)) {
	  	element.setCustomValidity("Please enter a valid zip code at least 5 characters in length.");
	  } else{
	  	element.setCustomValidity("");
	  }

	}

	function useForBilling(element){

		var checkbox = element;
		
		if(checkbox.checked === true){
			billingFirstName.value = shippingFirstName.value;
			billingLastName.value = shippingLastName.value;
			billingAddress.value = shippingAddress.value;
			billingCountry.value = shippingCountry.value;
			billingCity.value = shippingCity.value;
			billingZip.value = shippingZip.value;
		} else {
			billingFirstName.value = '';
			billingLastName.value = '';
			billingAddress.value = '';
			billingCountry.value = '';
			billingCity.value = '';
			billingZip.value = '';
		}

	}

	function addNameListeners(){
		for(var i = 0; i < nameFields.length;i++){
			nameFields[i].addEventListener('keyup', function(){
				validateName(this);
			});
		}
	}

	function addAddressListeners(){
		for(var i = 0; i < addressFields.length;i++){
			addressFields[i].addEventListener('keyup', function(){
				validateAddress(this);
			});
		}
	}

	function addCountryListeners(){
		for(var i = 0; i < countryFields.length;i++){
			countryFields[i].addEventListener('keyup', function(){
				validateCountry(this);
			});
		}
	}

	function addCityListeners(){
		for(var i = 0; i < cityFields.length;i++){
			cityFields[i].addEventListener('keyup', function(){
				validateCity(this);
			});
		}
	}

	function addZipListeners(){
		for(var i = 0; i < zipFields.length; i++){
			zipFields[i].addEventListener('keyup', function(){
				validateZip(this);
			});
		}
	}

	addNameListeners();
	addAddressListeners();
	addCountryListeners();
	addCityListeners();
	addZipListeners();

	checkbox.addEventListener('change', function(){
		useForBilling(this);
	});

	submit.addEventListener('submit', function(e){
		e.preventDefault();
	});



})(); 