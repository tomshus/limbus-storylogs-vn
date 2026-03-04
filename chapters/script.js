// Define your image paths
const PLAY_IMAGE = "../assets/icons/playbutton.png";
const PAUSE_IMAGE = "../assets/icons/pausebutton.png";

const audio = document.getElementById('voice');
const btn = document.getElementById('audioBtn');
const icon = document.getElementById('statusIcon');

// Function to handle the toggle
function toggleAudio() {
    if (audio.paused) {
        audio.play();
        icon.src = PAUSE_IMAGE;
    } else {
        audio.pause();
        icon.src = PLAY_IMAGE;
    }
}

// Add click event listener to the button
btn.addEventListener('click', toggleAudio);

// If the audio ends naturally, switch back to the play icon
audio.addEventListener('ended', () => {
    icon.src = PLAY_IMAGE;
});