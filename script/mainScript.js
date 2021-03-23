playBtn = document.getElementById("playBtn");
titleDiv = document.getElementById("titleDiv");
backToTitleBtn = document.getElementById("backToTitleBtn");
titleAnimationTime = 2;

playBtn.addEventListener("click", () => {
    titleDiv.style.animation = `fadeOutAnimation ${titleAnimationTime}s`
    setTimeout(function() {
        titleDiv.style.visibility = "hidden";
       },titleAnimationTime * 1000);
    
})

backToTitleBtn.addEventListener("click", () => {
    titleDiv.style.visibility = "visible";
})