$(function() {

	$('body').on('click', '.coninput', function() {
		coninput({
			'this': $(this),
			'id': 'fd-test-id',
			'type': 'text',
			'inputClass': 'demoClass',
			'placeholder': 'Amount',
			'inputLabel': ''
		});
	});

});