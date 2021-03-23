playBtn = document.getElementById("playBtn");
titleDiv = document.getElementById("titleDiv");
backToTitleBtn = document.getElementById("backToTitleBtn");

playBtn.addEventListener("click", () => {
    titleDiv.style.visibility = "hidden";
})

backToTitleBtn.addEventListener("click", () => {
    titleDiv.style.visibility = "visible";
})