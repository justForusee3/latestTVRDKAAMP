// var url =
// "aamps://dash.akamaized.net/dash264/TestCasesMCA/dolby/3/1/ChID_voices_20_128_ddp.mpd";
// window.onload = function () {
// player = new AAMPMediaPlayer();
// };

// function loadAAMPVideo() {
// var video = document.getElementById("videoPlayer");
// video.src = url;
// video.play();
// video.style.display = "block";
// }

// document.addEventListener("keydown", function (event) {
// if (event.keyCode === 13) {
//   // Enter key
//   loadAAMPVideo();
// }
// });






// Latest Code 


var url =
  "aamps://dash.akamaized.net/dash264/TestCasesMCA/dolby/3/1/ChID_voices_20_128_ddp.mpd";
window.onload = function () {
  player = new AAMPMediaPlayer();
};

function loadAAMPVideo() {
  var video = document.getElementById("videoPlayer");
  video.src = url;
  video.play();
  // video.style.display = "block";

  // Request full screen for the video element
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) { // Firefox
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) { // Chrome, Safari, and Opera
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { // IE/Edge
    video.msRequestFullscreen();
  }
}

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    // Enter key
    loadAAMPVideo();
  }
});


// Latest code 1.1


// var url =
//   "aamps://dash.akamaized.net/dash264/TestCasesMCA/dolby/3/1/ChID_voices_20_128_ddp.mpd";
// window.onload = function () {
//   player = new AAMPMediaPlayer();
// };

// function loadAAMPVideo() {
//   var video = document.getElementById("videoPlayer");
//   video.src = url;
//   video.play();
//   // video.style.display = "block";

//   // Request full screen for the video element
//   if (video.requestFullscreen) {
//     video.requestFullscreen();
//   } else if (video.mozRequestFullScreen) { // Firefox
//     video.mozRequestFullScreen();
//   } else if (video.webkitRequestFullscreen) { // Chrome, Safari, and Opera
//     video.webkitRequestFullscreen();
//   } else if (video.msRequestFullscreen) { // IE/Edge
//     video.msRequestFullscreen();
//   }
// }

// // Trigger the function when the video container is clicked
// var videoContainer = document.getElementById("video-card-container");
// // videoContainer.addEventListener("click", loadAAMPVideo);

// videoContainer.addEventListener("keydown", function (event) {
//   if (event.keyCode === 13) {
//     // Enter key
//     loadAAMPVideo();
//   }
// });

