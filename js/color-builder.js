(function() {

	var form = document.getElementById("color-builder-form"),
			box = document.getElementById("color"),
			red,
			green,
			blue,
			alpha,
			redVal = document.getElementById("red"),
			greenVal = document.getElementById("green"),
			blueVal = document.getElementById("blue"),
			alphaVal = document.getElementById("alpha");

	function colorBox(){

		red = redVal.value;
		green = greenVal.value;
		blue = blueVal.value;
		alpha = alphaVal.value;
		box.style.backgroundColor = 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';

	}

	form.addEventListener("change", function(){
		colorBox();
	});






})();