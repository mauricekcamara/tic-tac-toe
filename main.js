// Initialize players
const player1 = {
    screenName: 'Player 1',
    symbol: 'X',
    victories: 0,
};

const player2 = {
    screenName: 'Player 2',
    symbol: 'O',
    victories: 0,
};

// Function checking player turn
function checkTurn() {}

// Main game logic
const grid = document.querySelectorAll('.row');
let counter = 0;
for (let i = 0; i < grid.length; i++) {
    grid[i].addEventListener('click', function (event) {
        event.target.innerHTML = 'X';
        counter++;

        if (counter == grid.length) {
            alert('Game Over');
        }
    });
}
