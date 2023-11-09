document.addEventListener('DOMContentLoaded', function () {
    const inicio = document.querySelector('.inicio');
    const tireDuvidas = document.querySelector('.tire-duvidas');

    inicio.addEventListener('click', function () {
        // Adicione a lógica para ação do clique em "Início" aqui
        console.log('Clicou em Início');
    });

    tireDuvidas.addEventListener('click', function () {
        // Redirecionar o usuário para o site de destino na mesma pasta do projeto
        window.location.href = 'chat.html';
    });
});