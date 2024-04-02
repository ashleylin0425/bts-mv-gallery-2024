function embedYouTubeVideo(apiKey, videoId) {
    // Create an iframe element for the YouTube video player
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://www.youtube.com/embed/" + videoId + "?enablejsapi=1&origin=https://github.com/ashleylin0425/bts-mv-gallery-2024.git");
    iframe.setAttribute("width", "100%");
    iframe.setAttribute("height", "400");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "true");
  
    // Get the video player container element by its ID
    var videoPlayerContainer = document.getElementById("video-player");
  
    // Append the iframe to the video player container
    videoPlayerContainer.appendChild(iframe);
  }
  
  // Call the embedYouTubeVideo function with the API key and video ID
  // Replace 'YOUR_API_KEY' with your actual YouTube Data API key
  // Replace 'VIDEO_ID_HERE' with the actual YouTube video ID
embedYouTubeVideo('AIzaSyDVs3TqBJ1--p5EEO5rOkVXJEtbE5dIC1M', 'gdZLi9oWNZg');