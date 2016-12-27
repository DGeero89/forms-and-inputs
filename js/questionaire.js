(function(){

	var form = document.getElementById('questionnaire-form'),
			possibleAnswers = document.querySelectorAll('input[type="radio"]'), 
			answer,
			otherField = document.getElementById('otherAnswer'),
			i,
			answersLength = possibleAnswers.length,
			submit = document.querySelector('.submit');

	/*
	* Function to validate if the user chooses the 'other' option
	*/

	function validateAnswerField(){

		// Get value of other field
		var userAnswer = otherField.value;

		// Check if field is empty
		if( validator.isEmpty(otherField.value)){

			// Disable button and set custom validity message
			submit.setAttribute('disabled', 'disabled');
			otherField.setCustomValidity("Please enter the team you think will win the championship.");
		} else {
			// Removed disabled property and pass validation
			submit.removeAttribute('disabled');
			otherField.setCustomValidity("");
		}

	}

	/*
	* Loop over possible answers
	*/

	for(i = 0; i < answersLength; i++) {

		possibleAnswers[i].addEventListener('change', function(){
 				
			answer = this.value;
				
			// If user picked an option remove disabled property from submit button
			// else add disabled property
			if (answer !== 'null'){
				submit.removeAttribute('disabled');
			} else {
				submit.setAttribute('disabled', 'disabled');
			}

			// If user chooses other option and has not entered anything 
			// disabled the button, enable the other input field and set the field
			// to a required field
			if(answer === "other" && validator.isEmpty(otherField.value)){
				submit.setAttribute('disabled', 'disabled');
				otherField.removeAttribute('disabled');
				otherField.setAttribute('required', 'required');

			// If user chooses other but there is text in the field remove the disabled
			// property and set to required. This is in case a user chooses other,
			// starts to enter text, chooses another option, then chooses other again.
			} else if (answer === "other"){

				otherField.removeAttribute('disabled');
				otherField.setAttribute('required', 'required');

			// If answer is not 'other' remove required property and keep field disabled.
			} else {

				otherField.removeAttribute('required');
				otherField.setAttribute('disabled', 'disabled');

			}

		});
	
	}

	/*
	* Add event listeners to otherfield and the form itself
	*/ 
	otherField.addEventListener('keyup', validateAnswerField);
	
	form.addEventListener('submit', function(e){
		e.preventDefault();
	});

})();