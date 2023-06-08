const el = document.querySelector("#title");
const text = "Insegurança alimentar global";
const interval = 100;

function showText(el, text, interval) {
    const char = text.split("").reverse();

    const typer = setInterval(() => {

        if (!char.length) {

            return clearInterval(typer);
        }

        const next = char.pop();

        el.innerHTML += next;
    }, interval);
}

showText(el, text, interval);

const botao = document.querySelector("#bnt");

function showFutureText() {
    var futureText = document.getElementById("futureText");
    if (futureText.style.display === "none") {
        futureText.style.display = "block";
    } else {
        futureText.style.display = "none";
    }
}
const caixa = document.querySelector("#caixa");

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
botao.addEventListener("click", exibeCuriosidade);

function exibeCuriosidade() {
    const numeroAleatorio = Math.floor(Math.random() * 20);

    switch (numeroAleatorio) {
        case 1:

            caixa.innerHTML = "A fome crônica resulta em desnutrição, que afeta negativamente o crescimento e desenvolvimento físico e mental das pessoas, especialmente crianças."

            break;

        case 2:

            caixa.innerHTML = "A desnutrição enfraquece o sistema imunológico, tornando as pessoas mais suscetíveis a doenças infecciosas e aumentando a taxa de mortalidade, especialmente entre crianças e idosos."

            break

        case 3:

            caixa.innerHTML = "A desnutrição durante a infância pode levar a problemas de saúde crônicos e até mesmo ser transmitida para gerações futuras, perpetuando o ciclo da fome."

            break


        case 4:

            caixa.innerHTML = "A desnutrição afeta negativamente o desenvolvimento do cérebro, resultando em problemas cognitivos e dificuldades de aprendizagem."

            break


        case 5:

            caixa.innerHTML = "A fome pode afetar o desempenho acadêmico das crianças, pois a falta de nutrientes adequados prejudica a concentração, memória e capacidade de aprendizado."

            break


        case 6:

            caixa.innerHTML = "A fome limita a produtividade e o potencial econômico das pessoas, impedindo o desenvolvimento sustentável e perpetuando o ciclo de pobreza."

            break

        case 7:

            caixa.innerHTML = "Cerca de 45% das mortes de crianças com menos de cinco anos são atribuídas à desnutrição."

            break


        case 8:

            caixa.innerHTML = "A fome não é apenas uma questão de falta de alimentos, mas também está relacionada à pobreza, desigualdade e acesso limitado a recursos."

            break


        case 9:

            caixa.innerHTML = "A fome é um problema global que afeta mais de 690 milhões de pessoas em todo o mundo."

            break


        case 10:

            caixa.innerHTML = "A fome crônica pode levar a sérios problemas de saúde, como desnutrição, comprometimento do sistema imunológico e retardo no desenvolvimento físico e mental."

            break


        case 11:

            caixa.innerHTML = "O desperdício de alimentos é um dos principais contribuintes para a fome. Aproximadamente um terço de todos os alimentos produzidos para consumo humano é perdido ou desperdiçado a cada ano."

            break


        case 12:

            caixa.innerHTML = "A fome não está ligada apenas a países em desenvolvimento; mesmo em países desenvolvidos, há pessoas que enfrentam insegurança alimentar."

            break


        case 13:

            caixa.innerHTML = "A agricultura sustentável desempenha um papel fundamental na erradicação da fome, ao fornecer meios de subsistência para os agricultores e garantir o acesso a alimentos nutritivos."

            break


        case 14:

            caixa.innerHTML = "A escassez de alimentos pode levar a conflitos sociais, migrações forçadas e instabilidade política, agravando as tensões sociais e a violência."

            break

        case 15:

            caixa.innerHTML = "A fome durante a gravidez e lactação aumenta o risco de complicações para as mães e afeta negativamente o crescimento e desenvolvimento dos bebês."

            break

        case 16:

            caixa.innerHTML = "Pessoas desnutridas têm menos resistência física e são mais vulneráveis a desastres naturais, como secas e inundações, que podem agravar ainda mais a fome."

            break

        case 17:

            caixa.innerHTML = "A fome crônica pode levar a problemas de saúde mental, como depressão, ansiedade e estresse, devido ao estresse constante de não ter acesso adequado a alimentos."

            break

        case 18:

            caixa.innerHTML = "A desnutrição causada pela fome resulta em altas taxas de mortalidade infantil. De acordo com a Organização Mundial da Saúde, em 2020, cerca de 2,3 milhões de crianças menores de cinco anos morreram devido à desnutrição relacionada à fome."

            break

        case 19:

            caixa.innerHTML = "A fome tem um impacto significativo na economia global. Segundo o Relatório Global da Fome de 2020, a fome e a desnutrição custam cerca de US$ 3,5 trilhões por ano em perdas de produtividade e custos relacionados à saúde em todo o mundo."

            break

        case 20:

            caixa.innerHTML = "A fome crônica afeta uma parte substancial da população mundial. De acordo com a FAO (Organização das Nações Unidas para Alimentação e Agricultura), em 2021, mais de 9% da população global, ou seja, cerca de 690 milhões de pessoas, estavam em situação de insegurança alimentar severa."

            break


    }
}





exibeCuriosidade()

showText(el, text, interval);
