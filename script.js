var video = document.querySelector('video');

video.width = window.innerWidth;
video.height = window.innerHeight;

addEventListener("resize", rWindow);

function rWindow() {
    
    canvas.width =window.innerWidth;
    canvas.width = window.innerHeight;
}

