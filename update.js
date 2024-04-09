
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const chosenSong = params.get("song");



function updateSong(song) {
    const songDetail = songData[song];
    const songName = song;
    console.log (songDetail);
    const albumName = songDetail.album;
    const youtubeApiCode = songDetail.youtubeApiCode;

    document.querySelector(".video-title").textContent = songName;
    document.querySelector(".album-name").textContent = albumName;

    embedYouTubeVideo('AIzaSyDVs3TqBJ1--p5EEO5rOkVXJEtbE5dIC1M', youtubeApiCode);
}

updateSong(chosenSong);
