console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form was submitted seccessfully');
}

let godzilla = document.querySelector('img');

godzilla.addEventListener('mouseenter', () => {
	alert('look at my fitment! those wheels clean! my car doesnt usually let people touch it tho... you must be pretty cool.')
})

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


