# coninput
### Make any tag editable on any events

## How to use coninput

coninput is based on *[jQuery](http://www.jquery.com)*
*include the following scripts before your js file*

```html
<script type="text/javascript" src="path-to-jquery-file"></script> /*  */
<script type="text/javascript" src="scripts/coninput.js"></script>
<script type="text/javascript" src="scripts/scripts.js"></script> /* your js file */


now add the **coninput class to the tag you want to make editable

```html
<div class="coninput coninput-materialize demoClass">250</div>
<div class="coninput coninput-materialize demoClass">500</div>


```javacript
coninput({
	'this': $(this), // compulsory
	.....
	.....
	.....
	other options
});

call the coninput function inside any event such as click, as shown in the example
currently all the options are compulsory, we'll make them optional in coming updates

We'll make them optional in coming updates.

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