document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    const gameBoard = document.getElementById('game-board');
    const introAudio = document.getElementById('intro-audio');

    introAudio.volume = 0.6;

    let audioEnabled = false;
    let gameStarted = false;

    /* ===== 1. КЛИК — ТОЛЬКО ЗАПУСК САУНДТРЕКА ===== */
    function enableAudio() {
        if (audioEnabled) return;

        audioEnabled = true;
        introAudio.play().catch(() => {});
    }

    /* ===== 2. ПРОБЕЛ — СТАРТ ИГРЫ ===== */
    function handleKeydown(event) {
        if (event.code !== 'Space') return;
        if (gameStarted) return;

        event.preventDefault();
        gameStarted = true;

        // Глушим интро
        fadeOutAudio(introAudio, 1000);

        // Анимация рассеивания
        startScreen.classList.add('dissolve-out');

        setTimeout(() => {
            startScreen.style.display = 'none';

            gameBoard.classList.add('active');
            gameBoard.classList.add('fade-in');

            initGame();
        }, 1000);
    }

    /* ===== СОБЫТИЯ ===== */
    document.addEventListener('click', enableAudio);
    document.addEventListener('keydown', handleKeydown);
});

/* ===== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ===== */

function fadeOutAudio(audio, duration) {
    const step = audio.volume / (duration / 50);

    const fade = setInterval(() => {
        audio.volume = Math.max(0, audio.volume - step);

        if (audio.volume <= 0) {
            audio.pause();
            clearInterval(fade);
        }
    }, 50);
}

function initGame() {
    console.log('BLACK PROTOCOL: match initialized');
}
