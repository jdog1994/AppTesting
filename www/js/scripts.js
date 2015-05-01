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

	if(user != '') {
		if(password != '') {
			$.mobile.changePage("#main");
			$('#email_main').blur();
			$('#password_main').blur();	
		} else {
			alert('Enter Valid Password');
		}
	} else {
		alert('Enter Valid Username');
	}

	return false;
}



function loginFacebook() {
	facebookConnectPlugin.login(["public_profile"],
	    function (userData) {
    alert("UserInfo: " + JSON.stringify(userData));
},
	    function (error) { alert(error) }
	);
}

function CancelRegistration(){
	var c = confirm("Are you sure you want to cancel?");
	if(c) {
		$.mobile.changePage("#home");
	}	
}