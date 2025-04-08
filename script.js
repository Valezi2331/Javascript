let hobbies = []; // Array global para armazenar hobbies

function Saudacao() {
    let texto = "Como vai você?";
    document.getElementById("mensagem").textContent = texto;
}

function guardarHobbie() {
    let inputHobbie = document.getElementById("hobbie");
    let hobbie = inputHobbie.value.trim();
    let resposta = document.getElementById("respostaHobbie");

    if (hobbie == "") {
        let mensagemErro = "Por favor, preencha o campo de hobbie!";
        resposta.textContent = mensagemErro;
        alert(mensagemErro);
    } else {
        resposta.textContent = "Hobbie adicionado à lista";
        hobbies.push(hobbie); // Adiciona ao array GLOBAL
        MostrarHobbie();
    }
    inputHobbie.value = "";
}

function MostrarHobbie() {
    let lista = document.getElementById("listaHobbies");
    lista.innerHTML = ""; // Limpa a lista antes de recriar

    for (let i = 0; i < hobbies.length; i++) {
        let novoHobbie = document.createElement("li");
        novoHobbie.textContent = hobbies[i]; // Pega o hobbie correto
        lista.appendChild(novoHobbie);
    }
}