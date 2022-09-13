const body = document.querySelector('.container');
const btn = document.querySelector('button');
const container = document.querySelector('.container');

function createGrid(size = 16) {
	for (let i = 0; i < size * size; i++) {
		const grid = document.createElement('div');
		grid.style.border = 'solid .5px';
		grid.classList.add('blankGrid');
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
				divSquares.classList.remove('blankGrid');
				divSquares.classList.add('graySquare');
			});
		}
	});
}

btn.addEventListener('click', () => {
	gridSize = parseInt(prompt('How many squares per side would you like?'));
	createGrid(gridSize);
	colorDivs();
});

createGrid();
colorDivs();
