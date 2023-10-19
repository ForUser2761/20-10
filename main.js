onload = () => {
        document.body.classList.remove("container");
};

document.addEventListener("DOMContentLoaded", function () {
        var audioElement = document.getElementById("myAudio");

        // Bắt đầu phát từ giây thứ 10
        audioElement.currentTime = 8;

        // Chơi bài nhạc
        audioElement.play();
});
