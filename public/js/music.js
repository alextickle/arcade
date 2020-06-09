document.addEventListener('click', playMusic);
function playMusic() {
    var player = document.getElementById('musicPlayer');
    player.load();
    player.volume = .1;
    player.play();
    document.removeEventListener('click', playMusic);
}
