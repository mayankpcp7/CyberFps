// ---------------Navbar--------------------------
function shownav() {
  document.getElementById("nav").classList.toggle("show");
}
// -----------------GAMEPLAY---------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.getElementById("playButton");
  const video = document.getElementById("video");

  playButton.addEventListener("click", function () {
    if (video.paused) {
      video.play();
      playButton.textContent = "Pause Video";
      playButton.style.opacity = 0;
    } else {
      video.pause();
      playButton.textContent = "Play Video";
      playButton.style.opacity = 100;
    }
  });
});
// --------preloader----------------------
setTimeout(() => {
  document.getElementById("preloader").classList.add("d-none");
  preloader.classList.add("pointer_event_none");
  document.body.classList.remove("overflow-hidden");
}, 2000);
// -----aos------------------
src = "https://unpkg.com/aos@2.3.1/dist/aos.js" >
  AOS.init();