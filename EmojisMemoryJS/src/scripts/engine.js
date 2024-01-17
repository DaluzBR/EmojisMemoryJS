const emojis = [
    "😎", "😎", "😁", "😁",
    "😍", "😍", "🤑", "🤑",
    "🤢", "🤢", "🤡", "🤡",
    "😡", "😡", "👽", "👽",
    "👻", "👻", "👾", "👾",
    "💩", "💩", "🐬", "🐬"
];
const state = {
    score: {
        tentativa: 0,
        acertos: 0,
        erros: 0,
    }
}

let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }
    if (openCards.length == 2) {
        if (document.querySelectorAll(".boxMatch").length !== emojis.length) {
            setTimeout(checkMatch, 500);
        }
    }
}

function checkMatch() {
    state.score.tentativa++;
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
        state.score.acertos++;
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
        state.score.erros++;
    }

    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert(`Você Ganhou!

Tentativas: ${state.score.tentativa}
Acertos: ${state.score.acertos}
Errors: ${state.score.erros}`.trim());
    }
}








