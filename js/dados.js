function chamarNome(){
    let nome = localStorage.getItem("usuario");
    let todos = JSON.parse(nome);
    user_name = JSON.stringify(todos.nome);
    user_name = user_name.replace(/[""]/g,'')
    document.getElementById("var_nome").innerHTML = user_name;
}
function chamarEmail(){
    let nome = localStorage.getItem("usuario");
    let todos = JSON.parse(nome);
    user_email = JSON.stringify(todos.mail);
    user_email = user_email.replace(/"/g,'');
    document.getElementById("fmu").innerHTML = user_email;
}