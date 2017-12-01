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

var multiple = false;
var combi = false;
var waters = false;
var threed = false;
var confs = 0;
var freq = 0;
var step = 0.0;
var dstep = 0.0;
var email = "";
var tos = false;
var molList;
var modList;
var cutList;

var err = "";

function check() {
  combi = $("#combi").prop("checked");
	multiple = $("#multiple").prop("checked");
	waters = $("#waters").prop("checked");
	threed = $("#threed").prop("checked");
	confs = parseInt($("#confs").val());
	freq = parseInt($("#freq").val());
	step = parseFloat($("#step").val());
	dstep = parseFloat($("#dstep").val());
	email = $("#email").val();
	tos = $("#tos").prop("checked");

	
	if (isNaN(confs) 
		|| isNaN(freq) 
		|| isNaN(step) 
		|| isNaN(dstep)) {
		err = "One or more inputs are invalid.";
	}

	if (regEx($("#mol-list").val(), "^([A-Z0-9][A-Z0-9]?[A-Z0-9]?( ?))+$")) {
		molList = $("#mol-list").val().split(" ");
		console.log(molList);
	} else {
		err = "Format of molecule list is incorrect.";
	}

	if (regEx($("#modes-list").val(), "^(([0-9])([0-9]?)( ?))+$")) {
		
		modList = $("#modes-list").val().split(" ");
		console.log(modList);
	} else {
		err = "Format of modes to calculate is incorrect.";
	}

	if (regEx($("#cutoff-list").val(), "^([0-9].(0|5) ?)+$")) {
		cutList = $("#cutoff-list").val().split(" ");
	} else {
		cutList = $("#cutoff-list").val().split(" ");
		err = "Format of cutoff value list is incorrect.";
	}

	if (!validateEmail(email)) {
		err = "Invalid email.";
	}

	if (tos == false) {
		err = "Stop messing with my JavaScript."
	}
}
	
function regEx(subj, exp) {
	var re = new RegExp(exp);
	return re.test(subj);
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function tosClick() {
	tos = $("#tos").prop("checked");
	$("#process").prop("disabled", !tos);
}

function fadeOut() {
	$('#foo').fadeOut();
}
function fadeIn() { 
	$('#foo').fadeIn();
}

if ($("#tos").prop("checked") == false) {
	$("#process").prop("disabled", true);
}  else {
	$("#process").prop("disabled", false);
}