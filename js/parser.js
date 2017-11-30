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
var step = 0;
var dstep = 0;
var email = "";
var tos = false;

function submit() {
    checks();
}

function checks() {

	combi = $("#combi").prop("checked");
	multiple = $("#multiple").prop("checked");
	waters = $("#waters").prop("checked");
	threed = $("#threed").prop("checked");

	confs = $("#confs").val();
	feq = $("freq").val();
	step = $("step").val();
	dstep = $("dstep").val();

	email = $("#email").val();
	console.log(email);
	tos = $("#tos").prop("checked");
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function tosClick() {
	tos = $("#tos").prop("checked");
	$("#process").prop("disabled", !tos);
}

function test() {
	$().button('toggle');
	console.log("test");
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

function($) {
    'use strict';

    // UPLOAD CLASS DEFINITION
    // ======================

    var dropZone = document.getElementById('drop-zone');
    var uploadForm = document.getElementById('js-upload-form');

    var startUpload = function(files) {
        console.log(files)  
    }

    uploadForm.addEventListener('submit', function(e) {
        var uploadFiles = document.getElementById('js-upload-files').files;
        e.preventDefault()

        startUpload(uploadFiles)
    })

    dropZone.ondrop = function(e) {
        e.preventDefault();
        this.className = 'upload-drop-zone';

        startUpload(e.dataTransfer.files)
    }

    dropZone.ondragover = function() {
        this.className = 'upload-drop-zone drop';
        return false;
    }

    dropZone.ondragleave = function() {
        this.className = 'upload-drop-zone';
        return false;
    }

}(jQuery);