function atualizarContadorCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    let contador = document.getElementById("contador-carrinho");

    if (contador) {
        contador.textContent = carrinho.length;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let botoes = document.querySelectorAll(".add-carrinho");

    botoes.forEach(botao => {
        botao.addEventListener("click", function () {
            let id = this.getAttribute("data-id");
            let nome = this.getAttribute("data-nome");
            let preco = this.getAttribute("data-preco");
            let imagem = this.getAttribute("data-imagem"); // Captura a imagem

            let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

            carrinho.push({ id, nome, preco, imagem }); // Adiciona a imagem ao carrinho

            localStorage.setItem("carrinho", JSON.stringify(carrinho));

            atualizarContadorCarrinho();

            alert(`${nome} adicionado ao carrinho!`);
        });
    });

    atualizarContadorCarrinho();
});





document.getElementById("formInscricao").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let valid = true;
    let mensagemErro = "";
    
    // Pegando os valores
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const idade = document.getElementById("idade");
    const contato = document.querySelector('input[name="contato"]:checked');

    // Resetando estilos
    const inputs = [nome, email, telefone, idade];
    inputs.forEach(input => input.style.border = "1px solid #ccc");

    // Validação dos campos vazios
    if (!nome.value.trim()) {
        mensagemErro += "Nome não pode estar em branco.\n";
        nome.style.border = "2px solid red";
        valid = false;
    }
    if (!email.value.trim()) {
        mensagemErro += "E-mail não pode estar em branco.\n";
        email.style.border = "2px solid red";
        valid = false;
    } else if (!email.value.includes("@") || !email.value.includes(".")) {
        mensagemErro += "E-mail inválido.\n";
        email.style.border = "2px solid red";
        valid = false;
    }
    if (!telefone.value.trim()) {
        mensagemErro += "Telefone não pode estar em branco.\n";
        telefone.style.border = "2px solid red";
        valid = false;
    }
    if (!idade.value.trim()) {
        mensagemErro += "Idade não pode estar em branco.\n";
        idade.style.border = "2px solid red";
        valid = false;
    }
    if (!contato) {
        mensagemErro += "Escolha um meio de contato.\n";
        valid = false;
    }

    if (!valid) {
        alert(mensagemErro);
        return;
    }

    alert("Inscrição realizada com sucesso!");
    this.reset();
});
