document.addEventListener("DOMContentLoaded", function () {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    let carrinhoContainer = document.getElementById("carrinho");
    let totalCarrinho = document.getElementById("total-carrinho");
    let btnEsvaziar = document.getElementById("esvaziar-carrinho");

    function atualizarContadorCarrinho() {
        let contador = document.getElementById("contador-carrinho");
        if (contador) {
            contador.textContent = carrinho.length;
        }
    }

    function calcularTotal() {
        let total = carrinho.reduce((acc, produto) => acc + parseFloat(produto.preco), 0);
        totalCarrinho.textContent = total.toFixed(2); // Formata o valor
    }

    function atualizarCarrinho() {
        carrinhoContainer.innerHTML = "";

        if (carrinho.length === 0) {
            carrinhoContainer.innerHTML = "<p>O carrinho está vazio.</p>";
            totalCarrinho.textContent = "0,00";
            atualizarContadorCarrinho();
            return;
        }

        carrinho.forEach((produto, index) => {
            let item = document.createElement("div");
            item.innerHTML = `
            <section class="carrinho-js">
                <div class="uk-card-car uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                    <div class="uk-card-media-left uk-cover-container">
                        <img src="${produto.imagem}" alt="${produto.nome}" style="width: 180px; height: 240px;">
                    </div>
                    <div>
                        <div class="uk-card-body-car">
                            <h3 class="uk-card-title">${produto.nome}</h3>
                            <p>Preço: R$${produto.preco},00</p>
                            <button class="remover btn-inscrever1" data-index="${index}">Remover</button>
                        </div>
                    </div>
                </div>
                <hr>
            </section>
            `;
            carrinhoContainer.appendChild(item);
        });

        document.querySelectorAll(".remover").forEach(botao => {
            botao.addEventListener("click", function () {
                let index = this.getAttribute("data-index");
                removerDoCarrinho(index);
            });
        });

        calcularTotal();
        atualizarContadorCarrinho();
    }

    function removerDoCarrinho(index) {
        carrinho.splice(index, 1);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        atualizarCarrinho();
    }

    btnEsvaziar.addEventListener("click", function () {
        localStorage.removeItem("carrinho");
        carrinho = [];
        atualizarCarrinho();
    });

    atualizarCarrinho();
});
