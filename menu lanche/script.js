const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const toggleTheme = document.getElementById("toggleTheme");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleTheme.textContent = document.body.classList.contains
    ("dark") ? "♥️" : "♦️";
});


let carrinho = [];
const listaCarrinho = document.getElementById("lista-carrinho");
const totalCarrinho = document.getElementById("total-carrinho");
const finalizarCompra = document.getElementById("finalizarCompra");

function atualizarCarrinho() {
    listaCarrinho.innerHTML = "";
    let total = 0;
    carrinho.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nome} - R$${item.preco.toFixed(2)}`;
        listaCarrinho.appendChild(li);
        total += item.preco;
    });
    totalCarrinho.textContent = `Total: R$${total.toFixed(2)}`;
}

document.querySelectorAll(".adicionar-carrinho").forEach(btn => {
    btn.addEventListener("click", function() {
        const nome = this.getAttribute("data-nome");
        const preco = parseFloat(this.getAttribute("data-preco"));
        carrinho.push({ nome, preco });
        atualizarCarrinho();
    });
});

finalizarCompra.addEventListener("click", function() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }
    alert("Compra finalizada! Obrigado.");
    carrinho = [];
    atualizarCarrinho();
});