var player;

// YouTube API will call this function when the API is ready
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'WECKJ1VzCVA', // Replace with your YouTube video ID
        playerVars: {
            'autoplay': 1,
            'start': 23, // Start from 23 seconds
            'loop': 1,
            'playlist': 'WECKJ1VzCVA' // Add the video ID here for looping
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// Play the video when ready
function onPlayerReady(event) {
    event.target.playVideo();
}

// Check video state and pause at 1:12 (72 seconds)
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        var checkTime = setInterval(function() {
            var currentTime = player.getCurrentTime();
            if (currentTime >= 72) { // Stop at 1:12 (72 seconds)
                player.pauseVideo();
                clearInterval(checkTime);
                // Show the secret letter
                document.getElementById('secret-letter').style.display = 'block';
            }
        }, 1000);
    }
}
