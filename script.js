function openVideo() {

    const welcome = document.getElementById("welcome");
    const videoPage = document.getElementById("videoPage");

    welcome.classList.add("opening");

    setTimeout(function () {

        welcome.style.display = "none";
        videoPage.style.display = "block";

    }, 700);
}