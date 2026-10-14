const id = new URLSearchParams(window.location.search).get('id');
const carro = carros.find(c => c.id === id);

if (!carro) {
    // id inexistente: volta para o estoque
    window.location.href = 'estoque.html';
} else {
    const nomeCompleto = `${carro.marca} ${carro.modelo}`;
    document.title = `${nomeCompleto} | Black Horse Motors`;

    // textos
    document.getElementById('marca').textContent = carro.marca;
    document.getElementById('modelo').textContent = carro.modelo;
    document.getElementById('ano').textContent = carro.ano;
    document.getElementById('cor').textContent = carro.cor;
    document.getElementById('km').textContent = `${carro.km.toLocaleString('pt-BR')} KM`;
    document.getElementById('carroceria').textContent = carro.carroceria;
    document.getElementById('cambio').textContent = carro.cambio;
    document.getElementById('combustivel').textContent = carro.combustivel;
    document.getElementById('descricao').textContent = carro.descricao;
    document.getElementById('preco').textContent = `R$ ${carro.preco.toLocaleString('pt-BR')}`;

    // galeria
    const fotoPrincipal = document.getElementById('fotoPrincipal');
    const boxMiniaturas = document.getElementById('miniaturas');
    const btnAnterior = document.getElementById('btnAnterior');
    const btnProximo = document.getElementById('btnProximo');
    let atual = 0;

    fotoPrincipal.alt = nomeCompleto;

    // miniaturas = todas as fotos menos a principal
    carro.fotos.slice(1).forEach((caminho, i) => {
        const img = document.createElement('img');
        img.className = 'miniatura';
        img.src = caminho;
        img.alt = `${nomeCompleto} - foto ${i + 2}`;
        img.addEventListener('click', () => mostrar(i + 1));
        boxMiniaturas.appendChild(img);
    });

    function mostrar(indice) {
        atual = (indice + carro.fotos.length) % carro.fotos.length;
        fotoPrincipal.src = carro.fotos[atual];
        boxMiniaturas.querySelectorAll('.miniatura').forEach((m, i) => {
            m.classList.toggle('ativa', i + 1 === atual);
        });
    }

    btnAnterior.addEventListener('click', () => mostrar(atual - 1));
    btnProximo.addEventListener('click', () => mostrar(atual + 1));

    // carro com uma foto só: esconde as setas
    if (carro.fotos.length < 2) {
        btnAnterior.style.display = 'none';
        btnProximo.style.display = 'none';
    }

    mostrar(0);
}