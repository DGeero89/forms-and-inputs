(function(){

	var form = document.getElementById('payment-form'),
			fullName = form.querySelector('#fullName'),
			cardNumber = form.querySelector('#cardNum'),
			expirationControls = form.querySelectorAll('.expiration'),
			month = form.querySelector("#expirationMonth"),
			year = form.querySelector("#expirationYear"),
			csv = form.querySelector("#csv"),
			submit = form.querySelector(".submit");
  
  /*
  * Set selected index to -1 so month and year are invalid on page load
  */ 

  month.selectedIndex = -1;
  year.selectedIndex = -1;

  /*
  * Function to validate the name input field
  */

	function validateName(element) {

		var value = element.value;
		console.log(value);

	    if ( checkFullName(value) ) {
	    	element.setCustomValidity("");
	    } else {
	    	element.setCustomValidity("Please enter a your full name including your last.");
	    }
  }

  /*
  * Function to check that the name entered is the persons full name
  */

  function checkFullName(name){

  	var fullName = name.split(" "),
  			fullNameLength = fullName.length,
  			isName = false,
  			i;

  	// If there are two or more names entered such as first and last
  	if ( fullNameLength >= 2) {

  		// Loop over names
  		for (i = 0; i < fullNameLength; i++) {

  			// Each part of name should be at least 2 characters. Return isName variable
  			// if part of the name is less than 2 characters
  			if(fullName[i].length < 2){
  				return isName;
  			}

  		}

  		// Set isName to true if all parts are longer than 2 characters
  		isName = true;
  	}

  	return isName;

  }

  /*
  * Function to validate credit card
  */

  function validateCard(element) {
  	if ( validator.isCreditCard(element.value) ){
  		element.setCustomValidity("");
  	} else {
  		element.setCustomValidity("Please enter a valid card number consisting of 16 or 19 digits(including hyphens and spaces). You are currently using " +
  															element.value.length + " characters.");
  	}
  }

  /*
  * Function to validate Expiration date of card
  */

  function validateExpiration(element){
  	var expMonthField = form.querySelector('#expirationMonth'),
  			expMonthVal = expMonthField.value,
  			expYearField = form.querySelector('#expirationYear'),
  			expYearVal = expYearField.value,
  			today = new Date(),
  			currentYear = today.getFullYear(),
  			currentMonth = today.getMonth(),
  			expirationDate = new Date(expYearVal, expMonthVal),
  			yearIsExpired = (expYearVal < currentYear),
  			monthIsExpired = (expMonthVal < currentMonth);

  	// If expiration date is before today
 		if ( validator.isBeforeToday(expirationDate) ) {

 			// Check if year is expired. Set custom validation
 			if(yearIsExpired){
 				expYearField.setCustomValidity("Your card has expired. Please enter a new card number " + 
  																			"of check that you entered the correct year.");

 			// Else check if month is expired. Set custom validation
 			} else if (monthIsExpired){
 				expMonthField.setCustomValidity("Your card has expired. Please enter a new card number " + 
  																			"or check that you entered the correct month.");

 			// Else validation passes
 			} else {
 				expMonthField.setCustomValidity("");
  			expYearField.setCustomValidity("");
 			}

 		// If expiration date is not before today validation passes
 		} else {

  		expMonthField.setCustomValidity("");
  		expYearField.setCustomValidity("");

  	}
  	
  }

  /*
  * Function to validate CSV field
  */

  function validateCSV(element) {

    if( element.validity.tooShort){
      element.setCustomValidity("Please enter a valid CSV. A valid CSV will be 3 or 4 characters long depending on your card.");
    } else {
      element.setCustomValidity("");
    }
  }

  // Add event listeners to fields

  fullName.addEventListener('keyup', function(){
  	validateName(this);
  });

  cardNumber.addEventListener('keyup', function(){
  	validateCard(this);
  });

  month.addEventListener('change', function(){
  	validateExpiration(this);
  });

  year.addEventListener('change', function(){
  	validateExpiration(this);
  });

  csv.addEventListener('keyup', function(){
    validateCSV(this);
  });

  form.addEventListener('submit', function(e){
  	e.preventDefault();
  });





	




})();