let globalid = [];
dados = JSON.parse(localStorage.getItem("dados"));

function listarQuestao() {
  // Verifica se o usuário está logado
  if (!usuarioLogado) {
    // Esconde o botão de logout
    document.getElementById("botao-logout").style.display = "none";
    document.getElementById("saida").innerHTML =
      "<p>O usuário não está logado. <a href='../../index.html'>Clique para efetuar o login</a>.</p>";
  }if(dados) {
    document.getElementById("saida").innerHTML = `
            <h4>Você já foi aprovado com a nota ${dados.questionario.nota} no questionário realizado em ${dados.questionario.datahorario}.</h4>
            <a href="./resultado.html">Ver o seu questionário</a>
          `;
  }else{
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
          //armazena os id gerados...
          globalid[i] = JSON.parse(data[i].idperguntas);
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
        enviar = `<button id="but_dados" onclick="salvarResposta()">Enviar</button>`
        document.getElementById("saida").innerHTML = questoes;
        document.getElementById("budiv").innerHTML = enviar;
        
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }
}

// armazena resposta do usuario
let resposta = [];
// armazena uma parte da requisição
let questoes = [];
// função para chamar ao enviar
function salvarResposta() {
  let usuario = localStorage.getItem("usuario");
  if(usuario){
    //var inputs recebendo do documento onde o método querry seleciona o elemento input tipo radio, e retorna uma nodelist.
    // input pega as respostas enviadas pelo usuario... ou seja todos os campos do tipo radio...
    inputs = document.querySelectorAll('input[type="radio"]:checked');
    //for each percorre os itens de um array no caso é o inputs...
    inputs.forEach(function (inputs) {
      // se input checado valor vai receber o valor do input caso contrario o valor será nulo...
      var valor = inputs.checked ? inputs.value : null;
      resposta.push(valor);
    });
    // repetição para definir questoes
    //verifica se resposta foi totalmente preenchida. 
    if (resposta.length == 20) {
      for (i = 0; i < 20; i++) {
        //define o array questões. Contem um json com os id gerados após envio do user, e a resposta do usuario...
        questoes[i] = {"idquestao":globalid[i],"resposta":resposta[i] = Boolean(resposta[i] == 'true')};
      }
      console.log("Vinte Proxima");
      calcularNota();
    }else {
      //reseta resposta
      resposta = [];
      alert("Você deve selecionar todas para continuar.");
    }
  }else{
    alert("Você deve efetuar o login para continuar.");
    window.location.href = "../../index.html"

  }
}
function calcularNota(){
  //desestrutura o idusuario de usuarioLogado
  const {idusuario} = usuarioLogado;
  // define o json para post
  const envio = {idusuario,questoes};
  // define a rota
  const url = `${urlbase}/nota`;
  //define o método
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(envio),
  };
  //
  fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        alert("Erro na requisição");
      }
      return response.json();
    })
    .then((data) => {
      if (data) {
        salvarRetorno(data);
        if(data.questionario){
          window.location.href = "./resultado.html";
        }
      }
      else{
        alert(data.erro);
        window.location.href = "./feedback.html";
      }
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
}
function salvarRetorno(objeto) {
  // JSON.stringify() é usado para converter de objeto JS em string JSON
  localStorage.setItem("dados", JSON.stringify(objeto));
}