const el = document.querySelector("#title");
const text = "Aqui estará o título";
const interval = 150;

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
