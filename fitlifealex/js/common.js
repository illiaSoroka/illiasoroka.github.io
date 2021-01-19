const slider = document.querySelector('.slider');

const sliders = function (event) {
	slider.addEventListener(event, (event) => {
		if (event.target.tagName == 'IMG') {

			if (event.target.className = '.img-width') {
				let li = event.target.parentNode;
				let nextLi = li.previousElementSibling;
				let ul = li.parentNode;

				ul.insertBefore(li, nextLi);

			}
		}
	})
}
sliders('click');
