document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {
    StatusBar.hide();
}

function CancelRegistration(){
	var c = confirm("Are you sure you want to cancel?");
	if(c) {
		$.mobile.changePage("#home");
	}	
}