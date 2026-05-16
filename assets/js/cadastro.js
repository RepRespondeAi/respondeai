const form = document.getElementById("form");

form.addEventListener("submit", function(event) {

    event.preventDefault();


    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Criando objeto usuário
    const usuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    // Salvando no localStorage
    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Cadastro realizado com sucesso!");

    // Redireciona para login
    window.location.href = "login.html";
});