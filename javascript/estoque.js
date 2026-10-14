const botoes = document.querySelectorAll('.filtro');
const cards = document.querySelectorAll('.card');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const categoria = botao.dataset.categoria;

        // marca o botão clicado como ativo
        botoes.forEach(b => b.classList.remove('active'));
        botao.classList.add('active');

        // mostra ou esconde cada card
        cards.forEach(card => {
            const categoriasDoCard = card.dataset.categoria.split(' ');

            if (categoria === 'todos' || categoriasDoCard.includes(categoria)) {
                card.classList.remove('escondido');
            } else {
                card.classList.add('escondido');
            }
        });
    });
});