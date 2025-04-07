function Saudacao() { // função do botão de saudação
    let texto = "Como vai você?"; 
    document.getElementById("mensagem").textContent = texto;
} 

function guardarHobbie(){
    let inputHobbie = document.getElementById("hobbie")
    let hobbie = inputHobbie.value
    document.getElementById("respostaHobbie").textContent = hobbie;

    let lista = document.getElementById("listaHobbies")
    let novoHobbie = document.createElement("li")

    lista.appendChild(novoHobbie)

    novoHobbie.textContent = hobbie

    inputHobbie.value = ""
}