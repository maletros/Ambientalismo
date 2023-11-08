document.addEventListener('DOMContentLoaded', function () {
    const inicio = document.querySelector('.inicio');
    const tireDuvidas = document.querySelector('.tire-duvidas');
    const sobre = document.querySelector('.sobre');

    inicio.addEventListener('click', function () {
        // Adicione a lógica para ação do clique em "Início" aqui
        console.log('Clicou em Início');
    });

    tireDuvidas.addEventListener('click', function () {
        // Adicione a lógica para ação do clique em "Tire suas dúvidas" aqui
        console.log('Clicou em Tire suas dúvidas');
    });

    sobre.addEventListener('click', function () {
        // Adicione a lógica para ação do clique em "Sobre" aqui
        console.log('Clicou em Sobre');
    });
});
