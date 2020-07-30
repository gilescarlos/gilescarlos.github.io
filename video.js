// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const playBtn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

playBtn.addEventListener('click', function() {
    if(!playBtn.classList.contains('slide')) {
        playBtn.classList.add('slide');
        video.pause();
    } else {
        playBtn.classList.remove('slide');
        video.play();
    }
})

// preloader
const preloader = document.querySelector('.preloader');

window.addEventListener('load', function () {
    preloader.classList.add('hide-preloader');
})