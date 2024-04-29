CREATE TABLE Usuario (
  idUsuario SERIAL NOT NULL,
  email VARCHAR(50) NOT NULL,
  nome VARCHAR(100) NOT NULL,
  PRIMARY KEY(idUsuario)
);

CREATE TABLE Prova (
  idProva SERIAL NOT NULL,
  Usuario_idUsuario SERIAL NOT NULL,
  porcentagem DECIMAL NOT NULL,
  aprovado BOOL NOT NULL,
  PRIMARY KEY(idProva, Usuario_idUsuario)
);

CREATE TABLE Perguntas (
  idPerguntas SERIAL NOT NULL,
  enunciado VARCHAR(255) NOT NULL,
  resposta BOOL NOT NULL,
  PRIMARY KEY(idPerguntas)
);

CREATE TABLE Historico_Provas (
  Prova_idProva SERIAL NOT NULL,
  Perguntas_idPerguntas SERIAL NOT NULL,
  Prova_Usuario_idUsuario SERIAL NOT NULL,
  PRIMARY KEY(Prova_idProva, Perguntas_idPerguntas, Prova_Usuario_idUsuario)
);

INSERT INTO Perguntas (enunciado, resposta)
VALUES
('O Scrum foi desenvolvido a partir do Waterfall?', false),
('O Scrum utiliza de etapas iterativas no desenvolvimento de um produto. O controle de tarefas que serão desenvolvidas em uma etapa é chamado de Product Backlog?', false),
('O Scrum utiliza de etapas iterativas no desenvolvimento de um produto. Isso significa que a cada etapa parte do produto será entregue?', true),
('A metodologia Scrum é estritamente usada no desenvolvimento de software.',false),
('Quando há mudanças no escopo do projeto, conforme o Manifesto Ágil, estas mudanças são aplicadas de imediato e efetivo.', false),
('A base do metodo Scrum é uma equipe auto-organizada?', true),
('Dentre os artefatos do Scrum o Sprint Backlog sofre mudanças durante toda a extensão da etapa?', false),
('No fim de cada etapa de desenvolvimento ocorrem algumas cerimônias. O Daily Meeting é uma delas?', false),
('No fim de cada etapa de desenvolvimento ocorrem algumas cerimônias. A Sprint Retrospective é uma dessas cerimônias?', true),
('A metodologia Scrum pode ser aplicada por uma única pessoa?', false),
('A Sprint Review tem como único objetivo o reconhecimento de problemas encontrados pela equipe durante a Sprint?', false),
('A Sprint Retrospective tem como objetivo o reconhecimento de problemas encontrados pela equipe durante a Sprint?', true),
('O Manifesto Ágil foi desenvolvido sem base em artigos e livros científicos?', false),
('Scrum é considerado uma metodologia ágil?', true),
('O Scrum Master é responsável por garantir que a equipe siga as práticas do Scrum.', true),
('As cerimônias do Scrum incluem Sprint Planning, Daily Scrum, Sprint Review e Sprint Retrospective.', true),
('Scrum não possui papéis definidos, como desenvolvedores, analistas de negócios e testadores.', false),
('O Product Owner é responsável por priorizar e gerenciar o backlog do produto.', true),
('A duração de um sprint no Scrum é geralmente fixa e varia de equipe para equipe.', true),
('O objetivo do Daily Scrum é atualizar o Product Owner sobre o progresso do sprint.', false),
('Scrum não recomenda o uso de ferramentas para gerenciar o trabalho da equipe.', false),
('O Scrum enfatiza a transparência, inspeção e adaptação como princípios fundamentais.', true),
('A influência da ideia de promover eliminação de deperdícios veio dos conceitos do sistema de produção da Toyota.', true),
('Um dos valores usados pelo Scrum é a dedicação?', false),
('A falha ou falta de uma parte do projeto na entrega não prejudica os desenvolvedores no Scrum?', false),
('A tomada de decisões fica à poder do Dev Team?', false),
('Product Owner (P.O.) não tem poder nenhum sobre o produto e não auxilia em seu desenvolvimento?', false,)
('O papel do Scrum Master é auxiliar o funcionamento e operação da equipe?', true),
('O Dev Team não tem como função saber o funcionamento da metodologia Scrum?', false),
('Scrum recomenda o uso de ferramentas para gerenciar o trabalho da equipe.', true),
('Os pilares do Scrum são adaptação, inspeção e transparencia?', true),
('Os pilares do Scrum são adaptação, praticidade e transparencia?', false),
('O Scrum foi criado pelo Ken Schwaber e Jeff Sutheland?', true),
('O Scrum foi criado pelo Ken Schwaber e Jeff Switzerland?', false),
('O Scrum foi formalmente introduzido na literatura técnica na década de 1980?', true),
('O Scrum foi formalmente introduzido na literatura técnica na década de 1970?', false),
('As raízes e a origem do Scrum estão ligadas exclusivamente a área da engenharia de software?', false),
('Assim que firmado um objetivo ele ainda pode sofrer alterações durante a extensão do projeto?', true),
('O Scrum pode ajudar as pessoas a desenvoverem uma melhor organização pessoal?', true),
('O Scrum ao final de cada sprint prioriza a entrega da versão mais recente do projeto ao cliente?', true),
('Quando um membro do Dev Team possui dúvidas relacionadas ao Product Backlog o Product Owner deve ser consultado?', true),
('Dev Team é um elemento fundamental para o desenvolvimento de um projeto?', true),
('Toda a comunicação entre o cliente e o Dev Team é feita por intermedio do Scrum Master?', false),
('Product Owner é a posição mais próxima do cliente?', true),
('O Scrum Master facilita a organização de reuniões?', true),
('Product Owner é a pessoa que não tem papel na organização e desenvolvimento do projeto?', false),
('Product Owner deve compreender as necessidades do cliente?', true),
('O Scrum Master executa a mesma função do Dev Team?', false),
('O Scrum Master protege o Dev Team de solicitações de trabalhos excessivos?', true),
('Mesmo sem o Dev Team o Scrum ainda pode ser realizado? ', false);