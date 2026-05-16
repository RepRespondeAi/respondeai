const form = document.getElementById("form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;

    // Pegando usuário salvo
    const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

    // Verifica se existe usuário
    if(usuarioSalvo == null){
        alert("Nenhum usuário cadastrado!");
        return;
    }

    // Verifica login
    if(nome === usuarioSalvo.nome && senha === usuarioSalvo.senha){

        alert("Login realizado com sucesso!");

        // Vai para tela inicial
        window.location.href = "inicio.html";

    } else {

        alert("Nome ou senha incorretos!");

    }

});