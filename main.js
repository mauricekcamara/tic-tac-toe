// Initialize players
const Player1 = {
    userName: 'Player 1',
    symbol: 'X',
    wins: 0,
};

const Player2 = {
    userName: 'Player 2',
    symbol: 'O',
    wins: 0,
};

// Array keeping track of played cells
let state = ['', '', '', '', '', '', '', '', ''];

// Select winning message h3
let winMessage = document.querySelector('#win-message');

// Counter keeping track of player turn
let playerTurn = 1;

// Select cells in the grid
let box = document.querySelectorAll('.box');

// Changing the cell background color on mouse over
for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('mouseenter', function (event) {
        event.target.style.backgroundColor = '#D3D3D3';
    });
}
// Reverting the cell background color on mouse leave
for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('mouseleave', function (event) {
        event.target.style.backgroundColor = '';
    });
}

// Select player win count
let player1WinCount = document.querySelector('.win1');
let player2WinCount = document.querySelector('.win2');

let gameWon = false;

function clickHandler(event) {
    const data = event.target.dataset.index;
    if (event.target.innerHTML == '') {
        if (playerTurn % 2 != 0) {
            event.target.innerHTML = Player1.symbol;
            state[data] = Player1.symbol;
        } else {
            event.target.innerHTML = Player2.symbol;
            state[data] = Player2.symbol;
        }
        playerTurn++;
    }
    // Checking winning conditions
    const player1Wins = (currentValue) => currentValue == Player1.symbol;
    const player2Wins = (currentValue) => currentValue == Player2.symbol;

    if (state.slice(0, 3).every(player1Wins)) {
        playerHasWon(Player1);
        player1WinCount.innerHTML = Player1.wins;
    } else if (state.slice(0, 3).every(player2Wins)) {
        playerHasWon(Player2);
        player2WinCount.innerHTML = Player2.wins;
    } else if (state.slice(3, 6).every(player1Wins)) {
        playerHasWon(Player1);
        player1WinCount.innerHTML = Player1.wins;
    } else if (state.slice(3, 6).every(player2Wins)) {
        playerHasWon(Player2);
        player2WinCount.innerHTML = Player2.wins;
    } else if (state.slice(6, 9).every(player1Wins)) {
        playerHasWon(Player1);
        player1WinCount.innerHTML = Player1.wins;
    } else if (state.slice(6, 9).every(player2Wins)) {
        playerHasWon(Player2);
        player2WinCount.innerHTML = Player2.wins;
    } else if (state[0] == 'X' && state[3] == 'X' && state[6] == 'X') {
        playerHasWon(Player1);
        player1WinCount.innerHTML = Player1.wins;
    } else if (state[0] == 'O' && state[3] == 'O' && state[6] == 'O') {
        playerHasWon(Player2);
        player2WinCount.innerHTML = Player2.wins;
    } else if (state[1] == 'X' && state[4] == 'X' && state[7] == 'X') {
        playerHasWon(Player1);
        player1WinCount.innerHTML = Player1.wins;
    } else if (state[1] == 'O' && state[4] == 'O' && state[7] == 'O') {
        playerHasWon(Player2);
        player2WinCount.innerHTML = Player2.wins;
    } else if (state[2] == 'X' && state[5] == 'X' && state[8] == 'X') {
        playerHasWon(Player1);
        player1WinCount.innerHTML = Player1.wins;
    } else if (state[2] == 'O' && state[5] == 'O' && state[8] == 'O') {
        playerHasWon(Player2);
        player2WinCount.innerHTML = Player2.wins;
    } else if (state[0] == 'X' && state[4] == 'X' && state[8] == 'X') {
        playerHasWon(Player1);
        player1WinCount.innerHTML = Player1.wins;
    } else if (state[0] == 'O' && state[4] == 'O' && state[8] == 'O') {
        playerHasWon(Player2);
        player2WinCount.innerHTML = Player2.wins;
    } else if (state[2] == 'X' && state[4] == 'X' && state[6] == 'X') {
        playerHasWon(Player1);
        player1WinCount.innerHTML = Player1.wins;
    } else if (state[2] == 'O' && state[4] == 'O' && state[6] == 'O') {
        playerHasWon(Player2);
        player2WinCount.innerHTML = Player2.wins;
    } else if (gameWon == false && !state.includes('')) {
        winMessage.innerHTML = `It's a draw!`;
    }
}

// Main game logic
for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', clickHandler);
}

// Game reset
const reset = document.querySelector('.reset');
reset.addEventListener('click', function (event) {
    location.reload();
});

// New Game
const newGame = document.querySelector('.new-game');
newGame.addEventListener('click', function (event) {
    document.querySelectorAll('.box').forEach((box) => (box.innerHTML = ''));
    state = ['', '', '', '', '', '', '', '', ''];
    playerTurn = 1;
    gameWon = false;
    for (let i = 0; i < box.length; i++) {
        box[i].addEventListener('click', clickHandler);
    }
    winMessage.innerHTML = '';
});

// Function handling player Win
function playerHasWon(player) {
    winMessage.innerHTML = `${player.userName} has won!`;
    player.wins++;
    gameWon = true;
    for (let i = 0; i < box.length; i++) {
        box[i].removeEventListener('click', clickHandler);
    }
}
