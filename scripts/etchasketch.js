const body = document.querySelector('.container');
const btn = document.querySelector('.size');
const container = document.querySelector('.container');
const resetBtn = document.querySelector('.reset');

function createGrid(size = 16) {
	for (let i = 0; i < size * size; i++) {
		const grid = document.createElement('div');
		container.appendChild(grid);
		container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
		container.style.gridTemplateRows = `repeat(${size}, 1fr`;
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

resetBtn.addEventListener('click', () => {
	removeColor();
});

createGrid();
colorDivs();
