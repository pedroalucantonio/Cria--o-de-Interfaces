const botao = document.getElementById('DM');
const indicador = botao.querySelector('.check');
const botaoAT = document.getElementById('A+');
const botaoDT = document.getElementById('A-');
const main = document.querySelector('main');
let textSizeStep = 0;

function updateMainTextSize() {
    main.style.fontSize = `${100 + textSizeStep * 25}%`;

    if (!main.classList.contains('game-page')) {
        main.classList.toggle('cards-two', textSizeStep === 1);
        main.classList.toggle('cards-one', textSizeStep >= 2);
    }
}

botao.addEventListener('click', function(event) {
    event.preventDefault();
    const modoEscuro = indicador.classList.toggle('checkoff');
    document.body.classList.toggle('dark-mode', modoEscuro);
});

botaoAT.addEventListener('click', function(event) {
    event.preventDefault();
    textSizeStep = Math.min(2, textSizeStep + 1);
    updateMainTextSize();
});

botaoDT.addEventListener('click', function(event) {
    event.preventDefault();
    textSizeStep = Math.max(0, textSizeStep - 1);
    updateMainTextSize();
});
