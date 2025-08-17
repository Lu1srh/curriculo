const formNome   = document.getElementById("form-nome");
const boasVindas = document.getElementById("boas-vindas");
const curriculo  = document.getElementById("curriculo");
const tituloNome = document.getElementById("titulo-nome");
// Funcao para pegar o nome enviado e colocar no inicio da pagina de bem vindo
formNome.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();

    if (nome) {
        boasVindas.style.display = "none";
        curriculo.style.display  = "block";
        tituloNome.textContent   = `Bem-vindo, ${nome}!`;
    } else {
        alert("Digite seu nome antes de continuar.");
    }
});
