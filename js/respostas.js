function exibirRespostas(){
 let dados = JSON.parse(localStorage.getItem("dados"));
 let questoes=""
 for (i = 0; i < dados.questoes.length; i++) {
  questoes += `<tr >
  <td>${dados.questoes[i].enunciado}</td>
  <td> ${dados.questoes[i].respondido == true ? 'Verdadeiro':'Falso'}</td> 
  <td>${dados.questoes[i].correto == true ? 'Verdadeiro':'Falso'}</td>
</tr>`;
}

 document.getElementById("saidadedados").innerHTML = `${questoes}`
}
{/* <tr>
<td>Alfreds Futterkiste</td>
<td>Maria Anders</td>
<td>Germany</td>
</tr> */}