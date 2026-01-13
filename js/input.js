let gameStarted = false;

function startGame() {
    if (gameStarted) return;
    gameStarted = true;

    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');

    // Точка входа в игру
    initGame();
}

// Любая клавиша
window.addEventListener('keydown', startGame);

// Клик мыши
window.addEventListener('mousedown', startGame);
