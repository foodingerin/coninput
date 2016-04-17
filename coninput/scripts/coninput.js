/* coninput.js */

var coninput = function(object) {

	var tagValue = object['this'].html();

	/* INPUT WITH MATERIALIZE THEME
	DO NOT FORGET TO ADD MATERIALIZE FRAMEWORK BEFORE USING THIS THEME
	visit materializecss.com for more details
	 */

	if(object['this'].children('input').size() == 0) {
		object['this'].html('<div class="input-field"><input placeholder="' + object['placeholder'] + '" id="' + object['id'] + '" type="' + 
 	object['type'] + '" class=validate "' + object['inputClass'] + '" value="' + tagValue + '"><label for="' + object['id'] + '">' + object['inputLabel'] + '</label></div>');

 	/* DEFAULT STYLE INPUT */

	 	object['this'].html(object['inputLabel'] + '<input id="' + object['id'] + '" class="' + object['inputClass'] + '" type="' + object['type'] + '"  placeholder="' + object['placeholder'] + '" value="' + tagValue + '"/>');
	}

 };

$(function() {
	
	var checkKeyPressed = function(key) {
		key = key || window.event;

		$('.coninput input').each(function() {
			if(key.keyCode == 27 && $(this).children().size() != 0) {
				$(this).html($(this).children().val());
			}
		});

	}

	document.onkeydown = checkKeyPressed;

	$('body').on('blur', '.coninput',  function() {
		if($(this).children('input').size() != 0) {
			$(this).html($(this).children('input').val());
		}
	});

});