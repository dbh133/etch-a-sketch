const body = document.querySelector('.container');
const btn = document.querySelector('button');
const container = document.querySelector('.container');

function createGrid(size = 16) {
	for (let i = 0; i < size * size; i++) {
		const grid = document.createElement('div');
		grid.style.border = 'solid .5px';
		container.appendChild(grid);
		container.style.gridTemplateColumns = `repeat(${size}, 10px)`;
		container.style.gridTemplateRows = `repeat(${size}, 10px)`;
	}
}

function colorDivs() {
	const div = document.querySelectorAll('div');
	div.forEach((divSquares) => {
		if (divSquares.className !== 'container') {
			divSquares.addEventListener('mouseover', () => {
				divSquares.style.backgroundColor = `gray `;
			});
		}
	});
}

function removeColor() {
	const div = document.querySelectorAll('div');

	div.forEach((divSquare) => {
		if (divSquare.className !== 'container') {
			divSquare.style.backgroundColor = 'white';
		}
	});
}

btn.addEventListener('click', () => {
	gridSize = parseInt(prompt('How many squares per side would you like?'));
	createGrid(gridSize);
	removeColor();
	colorDivs();
});

createGrid();
colorDivs();
