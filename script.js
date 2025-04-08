let hobbies = []

function Saudacao() {
    let texto = "Como vai você?"
    document.getElementById("mensagem").textContent = texto;
}

function guardarHobbie() {
    let inputHobbie = document.getElementById("hobbie")
    let hobbie = inputHobbie.value.trim()
    let resposta = document.getElementById("respostaHobbie")

    if (hobbie == "") {
        let mensagemErro = "Por favor, preencha o campo de hobbie!"
        resposta.textContent = mensagemErro
        alert(mensagemErro)
    } else {
        resposta.textContent = "Hobbie adicionado à lista";
        hobbies.push(hobbie);
        MostrarHobbie()
    }
    inputHobbie.value = ""
}

function MostrarHobbie() {
    let lista = document.getElementById("listaHobbies");
    lista.innerHTML = ""

    for (let i = 0; i < hobbies.length; i++) {
        let novoHobbie = document.createElement("li")
        novoHobbie.textContent = hobbies[i]

        let botaoRemover = document.createElement("button")
        botaoRemover.className = "remove"
        botaoRemover.textContent = "Remover"
        botaoRemover.onclick = () => RemoverHobbie(i)

        let botaoEditar = document.createElement("button")
        botaoEditar.className = "editar"
        botaoEditar.textContent = "Editar"
        botaoEditar.onclick = () => EditaHobbie(i)

        novoHobbie.appendChild(botaoRemover)
        novoHobbie.appendChild(botaoEditar)
        lista.appendChild(novoHobbie)
    }

function RemoverHobbie(i) {
    hobbies.splice(i, 1)
    MostrarHobbie()
}

function EditaHobbie(i) {
    let hobbieEditado = prompt("Edite o hobbie:")
    if (hobbieEditado.trim !== ""){
        hobbies[i] = hobbieEditado
        MostrarHobbie()
    }
}

}

function Limpar(){
    hobbies.length = 0
    MostrarHobbie()
    const resposta = document.getElementById("respostaHobbie")
    resposta.textContent = "Lista de hobbies limpa!"
}
