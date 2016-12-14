(function(){

	var form = document.getElementById("signup-form");
	var firstNameField = document.getElementById("first-name");
	var lastNameField = document.getElementById("last-name");
	var emailField = document.getElementById("email");
	var dobField = document.getElementById("dob");
	var passwordField = document.getElementById("password");
	var confirmPassField = document.getElementById("confirm-password");

	function validateName(element) {
    
	    var value = element.value;

	    if ( validator.isEmpty(value)) {
	    	element.setCustomValidity("Oops! Looks like you didn't enter anything. Please enter a valid name consisting of at least 2 characters.");
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
  		}else {
  			element.setCustomValidity("");
  		}
  	}

  	function validatePass(element){

  		var pass = element.value;

  		if (!pass || pass.length < 8){
  			element.setCustomValidity("Please enter an acceptible password at least 8 characters in length.");	
  		}else{
  			element.setCustomValidity("");
  		}
  	}

  	function confirmPass(element, field){

  		var pass = element.value;
  		
  		var confirmPassword = field.value;

  		if(pass != confirmPassword){
  			element.setCustomValidity("Passwords don't match.");
  		}else{
  			element.setCustomValidity("");
  		}
  	}


  	function validateAge(element){

  		var dob = new Date(element.value);
  		
  		var now = new Date(Date.now());

  		var diffInMill = Math.abs(now.getTime() - dob.getTime());
  		var millInDay = 24 * 60 * 60 * 1000;
  		var age = Math.floor( (diffInMill/millInDay)/365 );

  		console.log(age);
  		if ( !validator.isBeforeToday(dob) || !validator.isDate(dob) ) {
  			element.setCustomValidity("Please enter a valid birthday.");
  		} else if ( age < 18){
  			element.setCustomValidity("Sorry you must be 18 or older to signup.");
  		}else {
  			element.setCustomValidity("");
  		}
  		
  	}



	firstNameField.addEventListener('keyup', function(){
		validateName(this);
	});

	lastNameField.addEventListener('keyup', function(){
		validateName(this);
	});

	emailField.addEventListener('keyup', function(){
		validateEmail(this);
	});

	dobField.addEventListener('keyup', function(){
		validateAge(this);
	});

	passwordField.addEventListener('keyup', function(){
		validatePass(this);
	});

	confirmPassField.addEventListener('keyup', function(){
		confirmPass(this, passwordField);
	});



})();