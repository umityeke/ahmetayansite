const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


//Get data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

//Validate data
function validateForm() {

	clearMessages();
	let errorFlag = false;

	if (nameInput.value.length < 1) {
		errorNodes[0].innerText = "Lütfen alanı doldurun!";
		nameInput.classList.add("error-border");
		errorFlag = true;
	}

	if (!emailIsvalid(email.value)) {
		errorNodes[1].innerText = "Geçersiz e-posta adresi!";
		email.classList.add("error-border");
		errorFlag = true;
	}

	if (message.value.length < 1) {
		errorNodes[2].innerText = "Lütfen mesaj giriniz!";
		message.classList.add("error-border");
		errorFlag = true;
	}

	if(!errorFlag){
		success.innerText="Mesajınız Gönderildi!";
	}
}

//Clear error / success message
function clearMessages() {
	for (let i = 0; i < errorNodes.length; i++) {
		errorNodes[i].innerText = "";
	}
	success.innerText="";
	nameInput.classList.remove("error-border");
	email.classList.remove("error-border");
	message.classList.remove("error-border");
}

//Check if email is valid
function emailIsvalid(email) {
	let pattern = /\S+@\S+\.\S+/;
	return pattern.test(email);
}