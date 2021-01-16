const slider = document.querySelector('.slider');

slider.addEventListener('click', (event) => {
	if (event.target.tagName == 'IMG') {

		if (event.target.className = '.img-width') {
			let li = event.target.parentNode;
			let nextLi = li.previousElementSibling;
			let ul = li.parentNode;

			ul.insertBefore(li, nextLi);

		}
	}
})