//salva status da prova se tiver prova feita...
usuario = JSON.parse(localStorage.getItem("usuario"))
function manterDadosDaProva(){
  // Configuração da requisição
  dados = {"idusuario":usuario.idusuario}
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
  console.log("certo")
}

function passou(){
  if (localStorage.getItem(dados)){
      document.getElementById("cert").setAttribute("display",flex)
  }
}