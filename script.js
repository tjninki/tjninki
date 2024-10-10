var player;

function onYouTubeIframeAPIReady() {
    player = new onYouTubeIframeAPIReady.Player('player', {
        videoId: 'WECKJ1VzCVA', // Your video ID here
        playerVars: {
            'autoplay': 1,
            'mute': 1,
            'start': 23, // Start at 23 seconds
            'loop': 1,
            'playlist': 'WECKJ1VzCVA'
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo(); // Start the video playback
}

function onPlayerStateChange(event) {
    if (event.data === onYouTubeIframeAPIReady.PlayerState.PLAYING) {
        var checkTime = setInterval(function() {
            var currentTime = player.getCurrentTime();
            if (currentTime >= 72) { // Stop video at 72 seconds (1:12)
                player.pauseVideo();
                clearInterval(checkTime); // Stop checking once paused
                document.getElementById('secret-letter').classList.add('show'); // Show the secret letter
            }
        }, 1000);
    }
}
