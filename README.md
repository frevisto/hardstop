<div align="middle">
  <img #logo src="https://github.com/claudsaints/hardstop/blob/main/assets/loho_hst.gif" align="middle">
</div>
<div>
 <h1>📍SOBRE</h1>
  <p>Um projeto da equipe <b>Hard Stop</b> dedicado à criação de um site de aprendizado sobre Scrum, impulsionado por um grupo incrivelmente comprometido e apaixonado por promover a metodologia ágil</p>
</div>


# 🗂️SPRINTS
| Sprint  | Datas   | Relatórios                                     |
|:-------:| --------------------- |---------------------------------------------- |
| 1  | :calendar: 17/04/2024 |  ➡️ [Ver](https://github.com/frevisto/hardstop/blob/main/logs/sprint1.md) |
| 2   | :calendar: 15/05/2024 | ➡️  [Ver](./link) |
| 3 | :calendar: 12/06/2024 |  ➡️ [Ver](./link) |


# 📑PRODUCT BACKLOG
|  Requisitos Funcionais              |
|----------------|
|   Os conteúdos devem ser distribuídos em páginas atendendo aos princípios de arquiteturade informação.      |
|   As páginas devem possuir um mecanismo de navegação comum (menu de navegação) que, ao ser clicado, remete o usuário à seção correspondente.                                                                                                            |
|   O usuário deve ser capaz de se auto cadastrar, informando seu nome completo e seu email.                                                                                                                                   |
|   O usuário deve ser capaz de fazer o login usando apenas o e-mail.                                                                                                                                                          |
|   O sistema deve ter um cadastro de questões, com alternativas verdadeira ou falsa,referentes aos temas apresentados nas páginas do portal.                                                                                  |
|  A base de dados deverá ter pelo menos 50 questões sobre os temas abordados em cada página do portal.                                                                                                                        |
|   As questões devem ser cadastradas pelo administrador diretamente no SGBD PostgreSQL.                                                                                                                                       |
|    O sistema deve gerar uma página com 20 questões aleatórias obtidas no BD. Essa página deve estar disponível somente após o usuário efetuar o login.                                                                       |
| Ao responder as questões o usuário recebe o seu score (0 a 100%).
|   Caso o usuário obtenha um score inferior a 70%, terá a opção de reiniciar a avaliação, sendo que nesse caso o sistema deverá sortear outro grupo de questões.                                                              |
|   Ao obter o score igual ou superior a 70%, o certificado deve ficar disponível para o aluno no sistema de modo permanente e as questões do teste devem aparecer de modo permanente e com o valor da correção (não deve haver mais sorteio). |
                                                                                                                          
|   Requisitos Não Funcionais                                                                                                                         |
|-----------------------------------------------------------------------------------------------------------------------|
|  Documentação no GitHub: repositório do código fonte de cada sprint, descrição do projeto, link para cada entrega de sprint, backlog do produto, backlog de cada sprint, requisitos do cliente (user stories), prints das telas ou link para o portal, burndown de cada sprint mostrando funcionalidades (quantidade de requisitos) implementadas versus tempo,tecnologias utilizadas e membros da equipe (link para o GitHub de cada membro).|
|Utilizar o Trello para gerenciar o backlog do produto. Preferencialmente fazer a integração entre o Trello e GitHub.|
|No Trello, cada cartão representa uma tarefa ou uma história de usuário.|
|Os membros da equipe podem adicionar links para problemas do GitHub relevantes acada cartão no Trello.|
|Quando um membro da equipe começa a trabalhar em uma tarefa, ele pode mover o cartão correspondente para a coluna "Em progresso".     |
|Quando o trabalho em uma tarefa estiver concluído e um pull request for aberto no GitHub, o membro da equipe pode adicionar o link do pull request ao cartão no Trello.|
|Os membros da equipe podem monitorar o progresso das tarefas no Trello e visualizar os links para os problemas e pull requests correspondentes no GitHub.|
| Utilizar a linguagem de programação JavaScript no front end e back end. |
|Linguagem de marcação HTML e estilos CSS. |
|Visual responsivo utilizando CSS média queries – não poderá ser usado o Bootstrap ou qualquer outro framework de estilização. |
| Prototipação de telas no Figma. |
| Os dados devem ser persistidos no SGBD PostgreSQL.|

# :busts_in_silhouette: USER STORIES
|Ator          |Ação                         |Motivo                        |
|--------------|-----------------------------|------------------------------|
|Como usuario eu quero|  Poder acessar um site simples e intuitivo,que ensine a metodologia SCRUM, seus conceitos, artefatos do SCRUM, os papéis, eventos e framework.                    |   Aprender e comprender todos os fundamentos do SCRUM e aprender como sobre e como aplicar a metodologia ágil no ambiente de trabalho.                           |
|Como usuario eu quero| Uma navegação simples entre as diferentes telas, atraves de um menu com os link para cada capitulo e/ou meu perfil                     |  Acessar facilmente cada seção afim de otimizar meu tempo de aprendizado e navegação, também obter uma visão completa de todo conteúdo que irei aprender.                            |
|Como usuario eu quero| Poder realizar meu cadastro de forma simples e objetiva fornecendo apenas meu nome complete, telefone e email.                      |      Para poder acessar de forma integral o conteúdo oferecido pela plataforma de aprendizado SCRUM.                        |
|Como usuario eu quero| Ter acesso aos capitulos que ensinam sobre a metodologia ágil SCRUM, cliando nos respectivos e nos botões de avançar ou voltar.                       | Poder ler e acessar todo o conteúdo podendo avançar ou voltar para melhor entendimento do que está sendo ensinado, com acesso fácil e intuitivo.                              |
|Como usuario eu quero| Ter acesso a avaliação de 20 perguntas com respostas e 'verdadeiro' ou 'falso', apenas 1 alternativa correta  afim de avaliar meu entendimento ao ensinado.                       | Avaliar minha compreensão diante ao tema ensinado no decorrer dos capitulos, e identificar as áreas que necessito aprofundarme mais.                             |
|Como usuario eu quero| Receber minha avaliação de 0 a 100% logo após realizar a avaliação                     |       ter compreensão se realmente aprendi oque foi ensinado e verficar se qual área é necessaria mais estudo.                       |
|Como usuario eu quero|  Ter a opção de realizar novamente o teste caso minha nota seja abaixo de 70%                    |     Ter uma outra oportunidade de estudar novamente e reavaliar meus conhecimentos já que não atingi a pontuação mínima.                         |
|Como usuario eu quero|  Ter acesso ao meu certificado de forma permante ao meu certificado atindo a nota, igual, ou superior a 70%                    |         Uma prova da minha total compreenção da metodologia ágil SCRUM, e assim certificar que dominio o assunto para necessitades futuras.                     |

# 🐦‍🔥 BURNDOWN

# ✈️ WIREFRAME

<div align="middle">
  <img src="https://github.com/frevisto/hardstop/blob/main/miscelaneo/FIGMA/FIGMA%20PROTOTIPO.png">
</div>

# 🔗 LINKS

## 🧮 TRELLO 
[Clique Aqui](https://trello.com/b/0PaoBh4g/ambiente-de-ensino-digital-de-scrum)

## 📖 REQUESITOS DO CLIENTE

# ⚙️ TOOLS

<div align="middle">
  <img  src="https://skillicons.dev/icons?i=github,vscode,figma,javascript,html,css,nodejs,postgresql,git,linux">
</div>

# :computer: EQUIPE

|CARGO | NOME| SOCIAL MEDIA |
|------|-----|:--------------:|
| Scrum Master     | Georgia Mantchev   | <a target="_blank" href="https://github.com/Mantchev13"><img  src="https://skillicons.dev/icons?i=github"></a>   |
| Product Owner     | Vitor  Azevedo  |     <a target="_blank" href="https://github.com/frevisto"><img  src="https://skillicons.dev/icons?i=github"></a>          |
| Dev     |   Andre De Carvalho      |     <a target="_blank" href="https://github.com/andremc331"><img  src="https://skillicons.dev/icons?i=github"></a>         |
| Dev     |   Breno De Luca    |     <a target="_blank" href="https://github.com/brn-lc"><img  src="https://skillicons.dev/icons?i=github"></a>        |
| Dev     |   Claudio Dos Santos   |    <a target="_blank" href="https://github.com/claudsaints"><img  src="https://skillicons.dev/icons?i=github"></a>           |
| Dev     |   Claudio Perretti    |     <a target="_blank" href="https://github.com/ClauPerretti"><img  src="https://skillicons.dev/icons?i=github"></a>      |
| Dev     |   Eduardo  Brito|            <a target="_blank" href="https://github.com/EduardoBrito2"><img  src="https://skillicons.dev/icons?i=github"></a>   |
| Dev     |   Nicolas Aquino  |           <a target="_blank" href="https://github.com/Nickaqui"><img  src="https://skillicons.dev/icons?i=github"></a>    |
| Dev     |   Nicolas  Henrique|        <a target="_blank" href="https://github.com/NICOLAShsdo"><img  src="https://skillicons.dev/icons?i=github"></a>       |
 
