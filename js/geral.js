const urlbase = "http://localhost:3030";
// Variável usada para manter os dados do usuário logado
// A função carregarLogin verifica se o usuário está logado e carrega na variável usuarioLogado
let usuarioLogado = undefined;

// Recuperar os dados de login que estão no localStorage do navegador
function carregarLogin() {
  // os dados estão na propriedade usuario do localStorage
  let objeto = localStorage.getItem("usuario");
  // JSON.parse() converte uma string JSON em um objeto JS
  usuarioLogado = JSON.parse(objeto);
}

function login() {
  // Redireciona para a página de login
  window.location.href = "./login.html";
}


function logout() {
  // Remover a propriedade `usuario` do localStorage
  localStorage.removeItem("usuario");
  clearInterval(relogiorodando);
  // Redireciona para a página de login
  window.location.href = "../index.html";
}