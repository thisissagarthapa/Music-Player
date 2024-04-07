let progress=document.getElementById("progress");
let song=document.getElementById("song");
let ctrlIcon=document.getElementById("ctrlIcon");

song.onloadedmetadata=function(){
    progress.max=song.duration;
    progress.value=song.currentTime;
}

function pausePlay(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause()
        ctrlIcon.classList.remove("fa-pause")
        ctrlIcon.classList.add("fa-play")
    } else{
        song.play()
        ctrlIcon.classList.add("fa-pause")
        ctrlIcon.classList.remove("fa-play")
    }

}

/* if(song.play()){
    setInterval(()=>{
progress.value=song.currentTime
    },500)
} */


//alternative

function updateProgress() {
    progress.value = song.currentTime;
    requestAnimationFrame(updateProgress);
}

updateProgress(); // Start updating progress


progress.oninput = function () {
    song.currentTime = progress.value;
    if (song.paused) {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
};

function seekBackward() {
    song.currentTime -= 10; // Decrease playback time by 10 seconds
    updateProgress(); // Update the progress bar immediately
}

function seekForward() {
    song.currentTime += 10; // Increase playback time by 10 seconds
    updateProgress(); // Update the progress bar immediately
}
