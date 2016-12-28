(function(){

	var form = document.getElementById('search-form'),
			searchBox = form.querySelector('#search-box'),
			submit = form.querySelector('#submit');

	function validateSearch(element){

		var input = element.value;

		if(validator.isEmpty(input)){
			element.setCustomValidity('Please enter a title to search for.');
		} else {
			element.setCustomValidity('');
		}

	}

	searchBox.addEventListener('keyup', function(){
		validateSearch(this);
	});

	submit.addEventListener('submit', function(e){
		e.preventDefault();
	});
})();