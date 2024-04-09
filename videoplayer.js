function embedYouTubeVideo(apiKey, videoId) {
    // Create an iframe element for the YouTube video player
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://www.youtube.com/embed/" + videoId + "?enablejsapi=1&autoplay=1&origin=https://ashleylin0425.github.io/bts-mv-gallery-2024/");
    iframe.setAttribute("width", "100%");
    iframe.setAttribute("height", "450");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "true");
  
    // Get the video player container element by its ID
    var videoPlayerContainer = document.querySelector(".video-container");
  
    // Append the iframe to the video player container
    videoPlayerContainer.appendChild(iframe);
  }
  
