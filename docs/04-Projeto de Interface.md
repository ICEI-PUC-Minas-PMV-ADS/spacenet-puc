
# Projeto de Interface

Nesse item são apresentados: Diagrana de Fluxo e Wireframes da aplicação.

No primeiro, é possível ter uma visão geral da interação do usuário pelas telas do sistema. Embora não apresente as telas, é possível compreender como o usuário navegará pelas funcionalidades do sistema.

No segundo, as telas são apresentadas.

## Diagrama de Fluxo

No diagrama abaixo podemos conferir o fluxo que o usuário fará ao navegar na Intranet. Cada etapa abaixo será detalhada na próxima sessão por meio de um Wireframe. 

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t5-spacenet/blob/22a657bdca095fe4f111da512323f23b28edf66d/docs/img/Fluxograma%20Spacenet%20atualiazado.png">

## Wireframes

Na tela de login o usuário ingressará com suas credenciais: login e senha, alem de poder recuperar a senha caso a tenha esquecido. A mensagem de erro caso digite a senha errada não faz parte do wireframe porque surgirá como um pop-up caso isso ocorra.
Atendimento do RF-002:	O site precisa ter funcionalidade para autenticação de usuário
<p align="center"> Tela de Login
<p align="center">
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t5-spacenet/blob/95971d4b626e38badfc66cee2cafa6798c001fde/docs/img/Login.png" width="450">

A tela de cadastro aparecerá inicialmente para o pessoal do setor administrativo, uma vez que o e-mail é institucional e criado pela própria empresa com uma senha padrão que deve ser mudada pelo usuário uma vez ele comece a usar a intranet. Essa mesma tela aparecerá para ele em caso de troca/recuperação de senha.
<p align="center"> Tela de Cadastro
<p align="center">
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t5-spacenet/blob/95971d4b626e38badfc66cee2cafa6798c001fde/docs/img/Cadastro.png" width="450">

Na homepage são concentradas todas as funcionalidades da spacenet: Notícias, informações sobre os setores da empresa, pedidos de ajuda, opção de sair da navegação, exibição dos aniversariantes do mês, etc.
Nessa janela serão atendidos  os requisitos:
* RF-001 Na página principal serão exibidos os aniversariantes daquele determinado mês ou semana;
* RF-005	O site deve oferecer funcionalidade para abertura de chamadas de TI;
* RF-007	O Suporte poderá visualizar chamadas pendentes e alterar o status para "atendida" ou "em andamento" - Essa ultima funcionalidade só estará disponível para o suporte.
<p align="center"> Homepage
<p align="center">
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t5-spacenet/blob/95971d4b626e38badfc66cee2cafa6798c001fde/docs/img/Homepage.png" width="450">

Funcionários, com excessão  do setor de suporte, poderão abrir chamados de TI para atender as suas necessidades. Requisito RF-005.
<p align="center"> Chamado de TI
<p align="center">
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t5-spacenet/blob/2b3d6505a61d3abf69268b990eb425aae1702343/docs/img/Modal%20Problema.png" width="450">
 
O funcionário que abriu um chamado de TI poderá visualizar o andamento da solução e a sua resposta, que foi fornecida pelo setor responsávavel - suporte. Requisito RF-005.
<p align="center"> Acompanhamento do Chamado de TI
<p align="center">
  <img src="" width="450">
 
Atendendo ao requisito RF-001,	O site irá oferecer uma aba descrita “Institucional”, nela conterá sub abas categorizadas com informações com informações gerais sobre a empresa.
<p align="center"> Informações extras sobre a empresa
<p align="center">
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t5-spacenet/blob/2b3d6505a61d3abf69268b990eb425aae1702343/docs/img/Modal%20Veja%20Mais.png" width="450">

A tela inicial conterá apenas chamadas para as notícias mais relevantes, ou adicionadas por último. No entanto, para visualiza-las, os funcionários deverão clicar no menu superior, sendo redirecionado para a tela de notícias. O requisito atendido aqui é o RF-004	- Haverá um portal de notícias relacionadas a empresa e aos colaboradores, atualizadas esporadicamente.
<p align="center"> Tela de notícias
<p align="center">
  <img src="" width="450">
