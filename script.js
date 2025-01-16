const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');

function playMusic(songPath) {
    audioSource.src = songPath;
    audioPlayer.load();
    audioPlayer.play();
    alert(`Now Playing: ${songPath}`);
}
