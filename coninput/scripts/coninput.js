(function() {

	var tagValue = $('.coninput').html();

	var coninput = function(id, placeholder, type, inputClass, inputLabel) {

		/* INPUT WITH MATERIALIZE THEME
		DO NOT FORGET TO ADD MATERIALIZE FRAMEWORK BEFORE USING THIS THEME
		visit materializecss.com for more details
		 */

	 	$('.coninput-materialize').html('<div class="input-field"><input placeholder="' + placeholder + '" id="' + id + '" type="' + 
	 	type + '" class=validate "' + inputClass + '" value="' + tagValue + '"><label for="' + id + '">' + inputLabel + '</label></div>');

	 	/* DEFAULT STYLE INPUT */

	 	$('.coninput-default').html(inputLabel + '<input id="' + id + '" class="' + inputClass + '" type="' + type + '"  placeholder="' + placeholder + '"/>');



	 };

});