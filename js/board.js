.title {
    font-size: 3.5rem;
    font-weight: bold;
    letter-spacing: 10px;
    margin-bottom: 20px;
}

.red-text {
    color: #ff0000;
    text-shadow: 0 0 15px rgba(255, 0, 0, 0.7);
}

.blink {
    font-size: 1rem;
    letter-spacing: 2px;
    color: #888;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
}

.corner {
    position: absolute;
    width: 30px;
    height: 30px;
    border: 3px solid #ff0000;
    transition: all 0.5s;
}

.top-left { top: 40px; left: 40px; border-right: none; border-bottom: none; }
.bottom-right { bottom: 40px; right: 40px; border-left: none; border-top: none; }
