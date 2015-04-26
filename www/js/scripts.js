document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {
    StatusBar.hide();
}

function submitForm(id) {
	switch(id) {
		case 'main_login':
			login();
			break;
	}
}

function login() {
	event.preventDefault();
	var user = $('#email_main').val();
	var password = $('#password_main').val();
	alert(user);
	$('#email_main').blur();
	$('#password_main').blur();
	return false;
}

function CancelRegistration(){
	var c = confirm("Are you sure you want to cancel?");
	if(c) {
		$.mobile.changePage("#home");
	}	
}