CREATE TABLE Usuario (
  idUsuario INTEGER NOT NULL,
  email VARCHAR(50) NOT NULL,
  nome VARCHAR(100) NOT NULL,
  PRIMARY KEY(idUsuario)
);

CREATE TABLE Prova (
  idProva INTEGER NOT NULL,
  Usuario_idUsuario INTEGER NOT NULL,
  porcentagem DECIMAL NOT NULL,
  aprovado BOOL NOT NULL,
  PRIMARY KEY(idProva, Usuario_idUsuario)
);

CREATE TABLE Perguntas (
  idPerguntas INTEGER NOT NULL,
  enunciado VARCHAR(255) NOT NULL,
  resposta BOOL NOT NULL,
  PRIMARY KEY(idPerguntas)
);

CREATE TABLE Historico_Provas (
  Prova_idProva INTEGER NOT NULL,
  Perguntas_idPerguntas INTEGER NOT NULL,
  Prova_Usuario_idUsuario INTEGER NOT NULL,
  PRIMARY KEY(Prova_idProva, Perguntas_idPerguntas, Prova_Usuario_idUsuario)
);