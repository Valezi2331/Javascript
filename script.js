function Saudacao() { // função do botão de saudação
    let texto = "Como vai você?"; 
    document.getElementById("mensagem").textContent = texto;
} 

function guardarHobbie(){

    let inputHobbie = document.getElementById("hobbie")
    let hobbie = inputHobbie.value.trim()
    let resposta = document.getElementById("respostaHobbie").textContent

    // ! se o valor do input for vazio, não adicionar o hobbie na lista e mostrar um alerta

if (hobbie == "") {
    let mensagemErro = "Por favor, preencha o campo de hobbie!" 
    resposta = mensagemErro;
    alert(mensagemErro)
}else{
        let respostaHobbie = "Hobbie adicionado a lista";
        let lista = document.getElementById("listaHobbies")
        let novoHobbie = document.createElement("li")
        resposta = respostaHobbie;

        lista.appendChild(novoHobbie)
        novoHobbie.textContent = hobbie
        inputHobbie.value = ""
    }

}