const body = document.querySelector('.container');
const btn = document.querySelector('button');
for (let i = 0; i < 16; i++) {
	const div = document.createElement('div');
	div.style.border = 'solid .5px';
	div.style.width = '100px';
	div.style.height = '100px';
	div.classList.add(`div${i}`);
	body.appendChild(div);
}

const div = document.querySelectorAll('div');

div.forEach((divSquares) => {
	if (divSquares.className !== 'container') {
		divSquares.addEventListener('mouseover', () => {
			let r = Math.floor(Math.random() * 255 + 1);
			let g = Math.floor(Math.random() * 255 + 1);
			let b = Math.floor(Math.random() * 255 + 1);
			let a = Math.floor(Math.random() * 100 + 1);

			divSquares.style.backgroundColor = `rgb(${r}, ${g}, ${b}, ${a}) `;
		});
	}
});
