(function (){
	var userName = document.getElementById("username"),
      password = document.getElementById("password");

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

  function validatePass(element){

  	var pass = element.value;

  	if (!pass || pass.length < 8){
  		element.setCustomValidity("Please enter an acceptible password at least 8 characters in length.");	
  	}else{
  		element.setCustomValidity("");
  	}
  }

  userName.addEventListener('keyup', function(){
  	validateName(this);
  });

  password.addEventListener('keyup', function(){
  	validatePass(this);
  });


})();