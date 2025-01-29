// const enderecoArea = document.getElementById('endereco-area');
// const closeBtnEndereco = document.getElementById('close-btn-endereco');
// const searchButton = document.getElementById('search-button');

// // Obtendo os botões e modais
// const clienteButton = document.getElementById("cliente-button");
// const clientemodal = document.getElementById("cliente-area");
// const closeClientehmtlmodal = document.getElementById("close-btn-cliente");

// const registerDogButton = document.getElementById("pet-button");
// const modalDog  = document.getElementById("pet-area");
// const closeDogmodal = document.getElementById("close-btn-pet");

// const perfilDogButton = document.getElementById("pet-button-data");
// const perfilDogmodal = document.getElementById("modalpets");
// const closeDogPerfilmodal = document.getElementById("close-btn-pets");

// /*MODAL DOS PERFIL DO PET */

// perfilDogButton.addEventListener("click", () => {
//     closeAllModals(); // Fecha os outros modais
//     perfilDogmodal.style.display = "block"; // Abre o modal de perfil do cachorro
// });

// closeDogPerfilmodal.addEventListener("click", () => {
//     perfilDogmodal.style.display = "none"; // Fecha o modal de perfil do cachorro
// });


// // Função para fechar o modal
// closeDogPerfilmodal.addEventListener("click", () => {
//     perfilDogmodal.style.display = "none";
// });

// // Função para fechar qualquer modal aberto
// function closeAllModals() {
//     clientemodal.style.display = "none";
//     modalDog.style.display = "none";
//      perfilDogmodal.style.display = "none";
// }

// // Modal para registro de cliente
// clienteButton.addEventListener("click", () => {
//     closeAllModals(); // Fecha os outros modais
//     clientemodal.style.display = "block"; // Abre o modal de cliente
// });

// closeClientehmtlmodal.addEventListener("click", () => {
//     clientemodal.style.display = "none"; // Fecha o modal de cliente
// });

// // Modal para registro de cachorro
// registerDogButton.addEventListener("click", () => {
//     closeAllModals(); // Fecha os outros modais
//     modalDog.style.display = "block"; // Abre o modal de cachorro
// });

// closeDogmodal.addEventListener("click", () => {
//     modalDog.style.display = "none"; // Fecha o modal de cachorro
// });

// // Modal para o perfil do cachorro


// Obtendo os botões e modais
const clienteButton = document.getElementById("client-button-data");
const clientemodal = document.getElementById("modalClient");
const closeClientehmtlmodal = document.getElementById("close-btn-client");

const registerDogButton = document.getElementById("pet-button");
const modalDog  = document.getElementById("pet-area");
const closeDogmodal = document.getElementById("close-btn-pet");

const perfilDogButton = document.getElementById("pet-button-data");
const perfilDogmodal = document.getElementById("modalpets");
const closeDogPerfilmodal = document.getElementById("close-btn-pets");

// Função para fechar todos os modais
function closeAllModals() {
    clientemodal.style.display = "none";
    modalDog.style.display = "none";
    perfilDogmodal.style.display = "none";
}

// Modal para o perfil do cliente
clienteButton.addEventListener("click", () => {
    closeAllModals();
    clientemodal.style.display = "block";
});

closeClientehmtlmodal.addEventListener("click", () => {
    clientemodal.style.display = "none";
});

// Modal para o registro do pet
registerDogButton.addEventListener("click", () => {
    closeAllModals();
    modalDog.style.display = "block";
});

closeDogmodal.addEventListener("click", () => {
    modalDog.style.display = "none";
});

// Modal para o perfil do pet
perfilDogButton.addEventListener("click", () => {
    closeAllModals();
    perfilDogmodal.style.display = "block";
});

closeDogPerfilmodal.addEventListener("click", () => {
    perfilDogmodal.style.display = "none";
});

// Submissão do formulário para registrar o pet
const form = document.getElementById('form-pet');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Coleta os dados do formulário
    const nomePet = document.getElementById('nomePet').value;
    const raçaPet = document.getElementById('raçaPet').value;
    const pesoPet = document.getElementById('pesoPet').value;
    const idadePet = document.getElementById('idadePet').value;
    const cpfDono = document.getElementById('cpfDono').value;

    // Armazenar os dados no localStorage
    localStorage.setItem("nomePet", nomePet);
    localStorage.setItem("raçaPet", raçaPet);
    localStorage.setItem("pesoPet", pesoPet);
    localStorage.setItem("idadePet", idadePet);
    localStorage.setItem("cpfDono", cpfDono);

    // Preencher o modal com os dados
    preencherDadosDoModal();
    modalDog.style.display = "none"; // Fecha o modal de registro de pet
});

// Função para preencher os dados no modal de perfil do pet
function preencherDadosDoModal() {
    document.getElementById("pet-nome").textContent = localStorage.getItem("nomePet");
    document.getElementById("pet-raca").textContent = localStorage.getItem("raçaPet");
    document.getElementById("pet-peso").textContent = localStorage.getItem("pesoPet");
    document.getElementById("pet-idade").textContent = localStorage.getItem("idadePet");
    document.getElementById("cpfDono").textContent = localStorage.getItem("cpfDono");
}
