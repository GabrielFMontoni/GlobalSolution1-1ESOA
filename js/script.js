const el = document.querySelector("#title");
const text = "Insegurança alimentar global";
const interval = 100;

function showText(el,text, interval){
    const char = text.split("").reverse();

    const typer = setInterval(() => {

        if(!char.length){

            return clearInterval(typer);
        }

        const next = char.pop();

        el.innerHTML += next;
    }, interval);
}

showText(el, text, interval);


function showFutureText() {
    var futureText = document.getElementById("futureText");
    if (futureText.style.display === "none") {
        futureText.style.display = "block";
    } else {
        futureText.style.display = "none";
    }
}

var video = document.querySelector("iframe");
var enlargeButton = document.querySelector(".btn-success");
enlargeButton.addEventListener("click", function () {
    if (video.style.display === "none") {
        video.style.display = "block";
    } else {
        video.style.display = "none";
    }
    video.style.width = "100%";
    video.style.height = "600px";
});

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}