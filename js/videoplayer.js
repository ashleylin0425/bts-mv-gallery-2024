function embedYouTubeVideo(apiKey, videoId) {
    let iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://www.youtube.com/embed/" + videoId + "?enablejsapi=1&autoplay=1&mute=1&origin=https://ashleylin0425.github.io/bts-mv-gallery-2024/");
    iframe.setAttribute("width", "100%");
    iframe.setAttribute("height", "450");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "true");
  
    let videoPlayerContainer = document.querySelector(".video-container");
  
    videoPlayerContainer.appendChild(iframe);
  }
  
