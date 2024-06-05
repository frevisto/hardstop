function listarQuestionario() {
    // Verifica se o usuário está logado
    if (!usuarioLogado) {
      // Esconde o botão de logout
      document.getElementById("botao-logout").style.display = "none";
      document.getElementById("saida").innerHTML =
        "<p>O usuário não está logado. <a href='../../index.html'>Clique para efetuar o login</a>.</p>";
    } else {
      // Configuração da requisição
      const url = `${urlbase}/nota`;
  
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
              </div>`;
          }
          document.getElementById("saida").innerHTML = questoes;
        })
        .catch((error) => {
          console.error("Erro:", error);
        });
    }
  }
  