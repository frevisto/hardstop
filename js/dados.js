function chamarNome(){
    let nome = localStorage.getItem("usuario");
    let todos = JSON.parse(nome);
    user_name = JSON.stringify(todos.nome);
    user_name = user_name.replace(/[""]/g,'')
    document.getElementById("var_nome").innerHTML = user_name;
}