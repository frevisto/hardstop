const { pool } = require("./bd.js");

async function listar(req, res) {
  // Procura na tbusuario o 1o registro que satisfaz as condições
  let resposta = await pool.query(
    "SELECT idperguntas,enunciado FROM perguntas ORDER BY RANDOM()"
  );

  return res.json(resposta.rows);
}

// Exporta as funções
module.exports = { listar };
