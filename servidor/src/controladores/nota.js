const { pool } = require("./bd.js");

async function numProva(){
     const idProva  =  pool.query(
        "SELECT MAX(idprova) FROM prova"
    ) 
    idProva++;
}


async function enviarGab(req,res,idProva){

    const {idusuario,globalid,recepitac} = req.body;

    let nota = 0;

    for(i=0; i < recepitac.length;i++){
    await pool.query(
            'INSERT INTO prova(idprova,idusuario,idPerguntas,respostas) VALUES ($1,$2,$3,$4)',
            [idProva,idusuario, globalid[i], recepitac[i]]
        )
    }
    return res.json("Recebido");
}

// select respostas do aluno where respostas do sistema são iguais retornando o numero de colunas dividindo por 2

module.exports = { enviarGab };