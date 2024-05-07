document.getElementById("formulario").addEventListener("submit", function(event) {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;

    var regExpNome = /^[A-Za-z\s]+$/.test(nome);
    var regExpEmail = /\S+@\S+\.\S+/.test(email);
    var regExpTelefone = /\([0-9]{2}\) [0-9]{5}-[0-9]{4}/.test(telefone);

    if (!regExpNome) {
        alert("O nome não pode conter números");
        event.preventDefault();
    }

    if (!regExpEmail) {
        alert("Digite um email válido");
        event.preventDefault();
    }

    if (!regExpTelefone) {
        alert("Digite um número de telefone válido (XX) XXXXX-XXXX");
        event.preventDefault();
    }
});