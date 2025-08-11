let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
let total = carrinho.reduce((soma, item) => soma + item.preco, 0);

function adicionarCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    total += preco;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    let itensCarrinho = document.getElementById('itensCarrinho');
    if (!itensCarrinho) return;
    itensCarrinho.innerHTML = '';
    carrinho.forEach(item => {
        let div = document.createElement('div');
        div.classList.add('item-carrinho');
        div.innerHTML = `<span>${item.nome}</span> <span>R$ ${item.preco.toFixed(2)}</span>`;
        itensCarrinho.appendChild(div);
    });
    let totalEl = document.getElementById('total');
    if (totalEl) totalEl.textContent = total.toFixed(2);
}

document.addEventListener("DOMContentLoaded", atualizarCarrinho);

document.addEventListener('click', e => {
    if (e.target.classList.contains('toggle-carrinho')) {
        document.getElementById('carrinho').classList.toggle('ativo');
    }
});
