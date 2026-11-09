const botao = document.getElementById('DM');
const indicador = botao.querySelector('.check');
const botaoAT = document.getElementById('A+');
const botaoDT = document.getElementById('A-');

botao.addEventListener('click', function(event) {
    event.preventDefault();
    const modoEscuro = indicador.classList.toggle('checkoff');
    document.body.classList.toggle('dark-mode', modoEscuro);
});

botaoAT.addEventListener('click', function(event) {
    let PorcentagemdoTexto = 100;
    PorcentagemdoTexto += 10;
    document.main.style.fontSize = PorcentagemdoTexto + '%';
});

botaoDT.addEventListener('click', function(event) {
    let PorcentagemdoTexto = 100;
    PorcentagemdoTexto -= 10;
    document.main.style.fontSize = PorcentagemdoTexto + '%';
});
