# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Um trabalho de pesquisa e diálogo entre os membros do grupo foi feito semanalmente para entender as principais dores que os colaboradores de diversas empresas sofrem no seu dia a dia. Dessa forma, com os dados apresentados, pudemos identificar os padrões existentes em diferentes segmentos do mercado corporativo para poder solucioná-los de modo mais assertivo.

## Personas

Persona 01


<div align="center">
<img src= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t5-spacenet/blob/1fba26133601ad95e971967e0541ba6e6dc96574/docs/img/Persona_01.png
 width="70%"/>
 </div>
 
 Persona 02
 
 <div align="center">
<img src= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t5-spacenet/blob/38861686d528e003b2caa4e85f5995fb14c05f56/docs/img/Persona_02.png
 width="70%"/>
 </div>


Persona 03
 
 <div align="center">
<img src= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t5-spacenet/blob/abebd5c2f6ed4d4844932417dbdc93545709dd34/docs/img/Persona_03.png width="70%"/>
 </div>



Persona 04
 
 <div align="center">
<img src= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t5-spacenet/blob/aa3617b1b8c996b4279c401419bfdecb550930c5/docs/img/Persona_04.png
     width="70%"/>
 </div>





## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Funcionário  | Ler notícias relacionadas a empresa          | Ficar informado das principais atualizações |
|Suporte    | Visualizar as chamadas de TI pendentes e alterar o status da mesma            | Realizar o suporte e sinalizar o andamento do chamado  |
|Administrador | Adicionar conteúdo ao painel de notícias | Informar os funcionários da empresa |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site irá oferecer uma aba descrita “Institucional”, nela conterá sub abas categorizadas com informações com informações gerais | ALTA | 
|RF-002| O site precisa ter funcionalidade para autenticação de usuário   | ALTA |
|RF-003| Na página principal serão exibidos os aniversariantes daquele determinado mês ou semana | ALTA |
|RF-004| Haverá um portal de notícias relacionadas a empresa e aos colaboradores, atualizadas esporadicamente | ALTA |
|RF-005| O site deve oferecer funcionalidade para abertura de chamadas de TI | ALTA |
|RF-006| Um quadro de avisos será exibido a cada funcionário, contendo informações sobre seu setor e da empresa | MÉDIA |
|RF-007| O Suporte poderá visualizar chamadas pendentes e alterar o status para "atendida" ou "em andamento" | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deverá ser compatível com os principais navegadores (Microsoft Edge, Firefox, Google Chrome) | MÉDIA | 
|RNF-002| O site deverá ser responsivo para visualização em dispositivos móveis |  BAIXA |
|RNF-003| O Front-End do sistema deverá ser escrito utilizando as linguagens HTML5, CSS3, JavaScript e frameworks como Bootstrap. | ALTA |
|RNF-004| O Back-End do sistema deverá ser desenvolvido com a linguagem C#, utilizando um banco de dados SQL. | ALTA |


Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01|O projeto deve estar finalizado e não extrapolar a data de 11/12/2022 |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

<div align="center">
<img src= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t5-spacenet/blob/94ceae953134908c5227840c6c6aa02c17c0c9ea/docs/img/Caso%20de%20uso.jpeg width="70%"/>
 </div>

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)
