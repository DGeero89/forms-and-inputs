(function() {

	var form = document.getElementById("color-builder-form");
	var box = document.getElementById("color");
	var redVal;
	var greenVal;
	var blueVal;
	var alphaVal;

	form.addEventListener("change", function(){

		redVal = document.getElementById("red").value;
		greenVal = document.getElementById("green").value;
		blueVal = document.getElementById("blue").value;
		alphaVal = document.getElementById("alpha").value;

		document.getElementById("color").style.backgroundColor = 'rgba(' + redVal + ',' + greenVal + ',' + blueVal + ',' + alphaVal + ')';

		

	});






})();