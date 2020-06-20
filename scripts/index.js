var name = null;
var knowResponses={
// Resposta do individuo : resposta do bot
// "Não":"<iframe width='360' height='275' src='https://www.youtube.com/embed/TQIBx6rgntc'</iframe>",
"Gostaria de saber algo":"<a href='' class='anchor-in-chat'>Algo</a>",
"Por favor":"Vamos treinar",
"Carolina":"Excelente! Agora vamos lá. Você sabe o que é o treinamento de Boas Práticas de Fabricação? Me informe o número correspondente a sua resposta. (1 para sim ,2 para não)",
"Arthur":"Excelente! Agora vamos lá. Você sabe o que é o treinamento de Boas Práticas de Fabricação? Me informe o número correspondente a sua resposta. (1 para sim ,2 para não)",
"Thais":"Excelente! Agora vamos lá. Você sabe o que é o treinamento de Boas Práticas de Fabricação? Me informe o número correspondente a sua resposta. (1 para sim ,2 para não)",
"Laura":"Excelente! Agora vamos lá. Você sabe o que é o treinamento de Boas Práticas de Fabricação? Me informe o número correspondente a sua resposta. (1 para sim ,2 para não)",
"Ana":"Excelente! Agora vamos lá. Você sabe o que é o treinamento de Boas Práticas de Fabricação? Me informe o número correspondente a sua resposta. (1 para sim ,2 para não)",
"Obrigado":"Eu que agradeço pela disposição",
"1":" Muito bem! Sinal de que você está antenado quanto às normas da empresa. Você sabe qual a importância desse treinamento?",
"2":"Poxa, que pena! Nós falamos tanto dele com todos. Você sabe qual a importância desse treinamento? (Sim ou Não)",
"Sim":"Que ótimo! Você está no caminho certo. Eu entrarei em contato com meus superiores para informar sua situação.",
"Não":"Não se preocupe, eu vou te ajudar.O treinamento de BPF visa estabelecer normas e medidas que todos devemos ter e tomar em relação ao nosso ambiente aqui de trabalho.",
"Obrigado":"Eu que agradeço, pela sua paciência e cordialidade."
};
var nameWasTaken = false;
function talk(){
  var userResponse = document.getElementById("userBox").value;
  if(!nameWasTaken){
    name = userResponse;
    nameWasTaken=true;
    console.log("Just took this guy name: " + name + " and I'll update the boolean to: "+ nameWasTaken);
  }
  CreateTheChatView("response-view",userResponse,name);
  document.getElementById("userBox").value="";
  if(nameWasTaken){
    if(userResponse in knowResponses){
      //criar a resposta do chat
      CreateTheChatView("speach-view",knowResponses[userResponse],null);
    }
    else
    CreateTheChatView("speach-view","Não entendi sua resposta, poderia repetir?",null);
  }  
}

  function CreateTheChatView(_class,_userResponse,_name){
    let divBox = document.createElement("div");
    let nameh6 = document.createElement("h6");
    let pResponse = document.createElement("p");
    if(_name == null || _name == undefined){
      nameh6.innerHTML = "Vilminha";  
    }else{
      nameh6.innerHTML = name;
    }
    pResponse.innerHTML = _userResponse;
    divBox.classList.add(_class);
    nameh6.classList.add("speach-name-view");    
    pResponse.classList.add("speach-content-view");
    divBox.appendChild(nameh6);
    divBox.appendChild(pResponse);
    document.getElementById("chatLog").appendChild(divBox);
  }