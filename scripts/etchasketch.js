const body = document.querySelector('.container');
const btn = document.querySelector('button');
let gridSize = 16;
const container = document.querySelector('.container');

for (let i = 0; i < gridSize ** 2; i++) {
	const div = document.createElement('div');
	div.style.border = 'solid .5px';
	body.appendChild(div);
	container.style.gridTemplateColumns = `repeat(${gridSize}, 10px)`;
	container.style.gridTemplateRows = `repeat(${gridSize}, 10px)`;
}

const div = document.querySelectorAll('div');

btn.addEventListener('click', () => {
	gridSize = parseInt(prompt('How many squares per side would you like?'));
	div.forEach((divSquares) => {
		if (divSquares.className !== 'container') {
			divSquares.style.backgroundColor = `white `;
		}
	});

	for (let i = 0; i < gridSize ** 2; i++) {
		const div = document.createElement('div');
		div.style.border = 'solid .5px';
		div.classList.add(`div${i}`);
		body.appendChild(div);
		container.style.gridTemplateColumns = `repeat(${gridSize}, 10px)`;
		container.style.gridTemplateRows = `repeat(${gridSize}, 10px)`;
	}
});

div.forEach((divSquares) => {
	if (divSquares.className !== 'container') {
		divSquares.addEventListener('mouseover', () => {
			divSquares.style.backgroundColor = `gray `;
		});
	}
});
