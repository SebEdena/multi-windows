import "./style.css";

const videoFrame = document.querySelector("video")!;
const infoDiv = document.querySelector(".info-wrapper")!;

navigator.mediaDevices
    .getUserMedia({
        video: { width: window.screen.width, height: window.screen.height },
    })
    .then((stream) => {
        videoFrame.width = window.screen.availWidth;
        videoFrame.height = window.screen.availHeight;
        videoFrame.srcObject = stream;

        setInterval(() => {
            videoFrame.setAttribute("style", `transform: translate(-${window.screenX}px, -${window.screenY}px)`);
        }, 10);

        videoFrame.play();

        infoDiv.classList.add("hide");
    })
    .catch((err) => {
        console.error(err);
    });

