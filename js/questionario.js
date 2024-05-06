var globalid = [];
function listarQuestao() {
  // Verifica se o usuário está logado
  if (!usuarioLogado) {
    // Esconde o botão de logout
    document.getElementById("botao-logout").style.display = "none";
    document.getElementById("saida").innerHTML = "<p>O usuário não está logado. Clique para efetuar o <a href='../../index.html'>login</a>.</p>";
  } else {
    // Configuração da requisição
    const url = `${urlbase}/questao`;

    // Submete a requisição
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          alert("Erro na requisição");
        }
        return response.json();
      })
      .then((data) => {
        let questoes = "";
        for (i = 0; i < 20; i++) {
          globalid[i]= JSON.parse(data[i].idperguntas);
          questoes += `<div class='questao'>
            <div class='linha-enunciado'>${data[i].enunciado}</div>
            <div class='linha-alternativa'>
              <div class='item-alternativa'>
                <input type="radio" value="true" name="questao-opcao-${data[i].idperguntas}" id="verdadeiro${i}">
                <label for="verdadeiro${i}">Verdadeiro</label>
              </div>
              <div class='item-alternativa'>
                <input type="radio" value="false" name="questao-opcao-${data[i].idperguntas}" id="falso${i}">
                <label for="falso${i}">Falso</label>
              </div>
            </div>
          </div>`;
        }
        document.getElementById("saida").innerHTML = questoes;
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }
}
// TESTE
//json para armazenar as respostas 
var resposta= {};
// função para chamar ao enviar
function salvarResposta(){
  //var inputs recebendo do documento onde o método querry seleciona o elemento input tipo radio, e retorna uma nodelist. 
  inputs = document.querySelectorAll('input[type="radio"]:checked');
  inputs.forEach(function(inputs) {
    var nome= inputs.name;
    var valor= inputs.checked ? inputs.value : null;
    resposta[nome] = valor;

  });
  console.log("Respostas: ",resposta);
  console.log(inputs)

  //for(i=0;i<20;i++){
  // console.log('resposta da posição de : ',globalid[i],resposta[i]);        
  //}
 
}