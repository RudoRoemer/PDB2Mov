(function($){
    function EnableApply() {

        var OriginalCaptcha = $('#careersForm').data('captchaText');
        var userCapcha = $('#captchaText').val();
        if (OriginalCaptcha == userCapcha) {
            $('#careerbtn').removeAttr('disabled');
        }
        else {
            $('#careerbtn').attr('disabled', 'disabled');
        }
    }

    function RegisterCapcha() {
        $("#captcha").html(''); //reset the generated captcha first
        $("#captchaText").val('');
        $("#careersForm").clientSideCaptcha({
            input: "#captchaText",
            display: "#captcha",
        });            
    }
}(jQuery));

var multi = false;

function checks() {
	if($("#threed"). prop("checked") == true) {
		console.log("true");
	} else {
		console.log("false");
	}
}

function test() {
	$().button('toggle');
	console.log("test");
}

function fadeOut() {
	$('#foo').fadeOut();
	$('#foo').fadeIn();
}