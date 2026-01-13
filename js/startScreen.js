document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    const gameBoard = document.getElementById('game-board');
    const introAudio = document.getElementById('intro-audio');
    const audioToggle = document.getElementById('audio-toggle');
    const audioIcon = document.getElementById('audio-icon');

    const iconOn = 'assets/ui/music_on.png';
    const iconOff = 'assets/ui/music_off.png';

    introAudio.volume = 0.6;
    introAudio.loop = true;

    let gameStarted = false;
    let isMuted = false;

    if (audioToggle) {
        audioToggle.addEventListener('click', (e) => {
            e.stopPropagation();

            isMuted = !isMuted;
            introAudio.muted = isMuted;

            audioIcon.src = isMuted ? iconOff : iconOn;
            console.log("Sound:", isMuted ? "OFF" : "ON");
        });
    }

    function launchGame() {
        if (gameStarted) return;
        gameStarted = true;

        console.log("Start game");

        startScreen.classList.add('dissolve-out');

        setTimeout(() => {
            startScreen.style.display = 'none';

            gameBoard.classList.remove('hidden');
            gameBoard.classList.add('active', 'fade-in');

            if (typeof initGame === 'function') initGame();
        }, 1000);
    }

    const handleInteraction = () => {
        introAudio.play().catch(() => {});

        const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 0);

        if (isMobile && !gameStarted) {
            launchGame();
        }
    };

    window.addEventListener('keydown', (event) => {
        if (event.code === 'Space' || event.keyCode === 32) {
            if (!gameStarted) {
                event.preventDefault();
                introAudio.play().catch(() => {});
                launchGame();
            }
        }
    });

    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction, { passive: true });
});
