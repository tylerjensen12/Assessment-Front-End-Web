console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form Submitted')
}

function compliment() {
	alert('Nice Hair!!!')
}


let img = document.querySelector('img')
let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', compliment)