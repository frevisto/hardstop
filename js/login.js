function logar() {
  const mail = document.getElementById("input-mail").value.trim();

  if (!mail || mail.length == 0) {
    alert("Forneça o e-mail");
  } else {
    const usuario = { mail };

    // Configuração da requisição
    const url = `${urlbase}/login`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    };

    // Submete a requisição
    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          alert("Erro na requisição");
        }
        return response.json();
      })
      .then((data) => {
        if (data.idusuario) {
          x = data.idusuario
          manterDadosDaProva(x);
          salvarLogin(data);

          window.location.href = "./pages/profile.html";
        }
        else{
          alert(data.erro);
        }
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }
}

// Salvar dados de login
function salvarLogin(objeto) {
  // JSON.stringify() é usado para converter de objeto JS em string JSON
  localStorage.setItem("usuario", JSON.stringify(objeto));
}

//salva status da prova se tiver prova feita...
function manterDadosDaProva(y){
  // Configuração da requisição
  dados = {"idusuario":y}
  const urll = `${urlbase}/listar`
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  };  
  // Submete a requisição
  fetch(urll, options)
  .then((response) => {
    if (!response.ok) {
      alert("Erro na requisição");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data)
    if (data.questionario) {
      salvarResposta(data);
    }
  })
}


function salvarResposta(objeto) {
  // JSON.stringify() é usado para converter de objeto JS em string JSON
  localStorage.setItem("dados", JSON.stringify(objeto));
}
