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

function chamarData(){
    let dados = localStorage.getItem("dados");
    let data =  JSON.parse(dados);
    let cal = data.questionario.datahorario;
    let oder= " "
    for (let i = 0; i < 10; i++){
      oder += cal[i]
    }
    oder = oder.replace(/[-]/g,'')
    const ano = oder.substring(1,5)
    const mes = oder.substring(5,7)
    const dia = oder.substring(7,10)
    const diad = `${dia}/${mes}/${ano}`


    document.getElementById("data").innerHTML = diad;
}
