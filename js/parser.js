
function test() {
	$().button('toggle');
	console.log("test");
}



var x=0;

$(document).on('click', '.number-spinner button', function () {
	x++;
	if (x%2 == 1) {    
		var btn = $(this),
			oldValue = btn.closest('.number-spinner').find('input').val().trim(),
			newVal = 0;
		
		if (btn.attr('data-dir') == 'up') {
			newVal = parseInt(oldValue) + 1;
		} else {
			if (oldValue > 1) {
				newVal = parseInt(oldValue) - 1;
			} else {
				newVal = 1;
			}
		}
	}
	btn.closest('.number-spinner').find('input').val(newVal);
});