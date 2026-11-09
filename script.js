const botao = document.getElementById('DM');
const indicador = botao.querySelector('.check');

botao.addEventListener('click', function(event) {
    event.preventDefault();
    const modoEscuro = indicador.classList.toggle('checkoff');
    document.body.classList.toggle('dark-mode', modoEscuro);
});