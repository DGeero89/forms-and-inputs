(function(){

	var form = document.getElementById('schedule-form'),
			firstName = form.querySelector('#first_name'),
			lastName = form.querySelector('#last_name'),
			email = form.querySelector('#email'),
			phone = form.querySelector('#phone'),
			date = form.querySelector('#scheduleDate'),
			time = form.querySelector('#scheduleTime'),
			timezone = form.querySelector('#scheduleTimeZone');

	function validateName(element){

		var value = element.value;

	    if ( validator.isEmpty(value)) {
	    	element.setCustomValidity("Oops! Looks like you didn't enter anything. Please enter a valid first name at least 2 characters in length.");
	    } else if ( element.validity.tooShort) {
	    	element.setCustomValidity("Please enter a name 2 characters or longer!");
	    } else{
	    	element.setCustomValidity("");
	    }

	}

	function validateEmail(element){
		
		var value = element.value;

  	if ( validator.isEmpty(value) ) {
  		element.setCustomValidity("Oops! Looks like you didn't enter anything. Please enter a valid email.");
  	} else if ( !validator.isEmailAddress(value) ){
  		element.setCustomValidity("Please enter a valid email. An email address consists of two strings combined by an @ symbol.");
  	} else {
  		element.setCustomValidity("");
  	}
  }

  function validatePhone(element){

  	var value = element.value;

  	if ( validator.isEmpty(value) ){
  		element.setCustomValidity('This is a required field. Please enter a valid phone number.');
  	} else if ( !validator.isPhoneNumber(value) ){
  		element.setCustomValidity('That is not a valid phone number. Please enter a valid phone number.');
  	} else {
  		element.setCustomValidity('');
  	}

  }

  function validateDate(element){

  	var value = element.value;

  	if ( !validator.isDate(value) ){
  		element.setCustomValidity('Enter a valid date.');
  	} else if ( validator.isBeforeToday(value) ) {
  		element.setCustomValidity('Please enter a valid date in the future.');
  	} else {
  		element.setCustomValidity('');
  	}
  }

  function validateTime(element) {

  	var value = element.value,
  			time = value.split(':'),
  			hours = time[0].trim(),
  			min = time[1];
  	console.log(value);
  	if (hours < 8 || hours > 17){
  		element.setCustomValidity("Please enter a time during business hours (8am to 5pm).");
  	} else {
  		element.setCustomValidity('');
  	}
  }

	firstName.addEventListener('keyup', function(){
		validateName(this);
	});

	lastName.addEventListener('keyup', function(){
		validateName(this);
	});

	email.addEventListener('keyup', function(){
		validateEmail(this);
	});

	phone.addEventListener('keyup', function(){
		validatePhone(this);
	});

	date.addEventListener('change', function(){
		validateDate(this);
	});

	time.addEventListener('change', function(){
		validateTime(this);
	});


})();