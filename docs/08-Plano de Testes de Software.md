# Plano de Testes de Software

Os testes que serão realizados ao final do desenvolvimento da aplicação estão descritos a seguir:
 
| **Caso de Teste** 	| **CT- 01 Visualizar o menu de  Navegação** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-001 - O site irá oferecer uma aba descrita “Institucional”, nela conterá sub abas categorizadas com informações de cada aplicação. |
| Objetivo do Teste 	| Verificar se o menu de navegação (institucional) está exibindo as sub abas referente a cada página da aplicação. |
| Passos 	| 1- Fazer login no site / 2- acessar a página inicial / 3- verificar o menu institucional|
|Critério de Êxito |1- Deverá ser apresentado 4 submenus (Home, notícias, setores, ajuda e sair).
2- Cada submenu deverá ter seu ícone próprio.|
|  	|  	|
| **Caso de Teste** 	| **CT- 02 Acessar cada sub aba do menu Navegação**	|
|Requisito Associado | RF01- O site irá oferecer uma aba descrita “Institucional”, nela conterá sub abas categorizadas com informações de cada aplicação. |
| Objetivo do Teste 	| Verificar se cada sub aba do menu navegação está direcionando para a página correta da aplicação. |
| Passos 	|1- Fazer login no site / 2- acessar a página inicial / 3- verificar o menu institucional / 4- clicar em cada sub aba |
|Critério de Êxito |1- Deverá ser apresentado 4 submenus (Home, notícias, setores, ajuda e sair). / 2- Cada submenu deverá direcionar a aplicação específica.|
|  	|  	|
| **Caso de Teste** 	| **CT- 03 verificar a autenticação (na tela de login) de um usuário já registrado no sistema**	|
|Requisito Associado | RF02- Ao abrir o site será solicitado um login de acesso. Os administradores do site terão acesso a mais funcionalidades. |
| Objetivo do Teste 	| Verificar a autenticação do usuário no sistema para ser direcionado a homepage|
| Passos 	|1- Acessar o site da aplicação / 2- Digitar seu e-mail e senha / 3- visualizar a homepage|
|Critério de Êxito |1- Deverá ser apresentado os campos de user e senha / 2- Deverá ser apresentado o botão “enter e “perdeu a senha?” / 3- Deverá acessar a homepage diretamente|
|  	|  	|
| **Caso de Teste** 	| **CT- 04 Verificar o comportamento da autenticação na tela de login do usuário que não está registrado no sistema.**	|
|Requisito Associado |RF02- Ao abrir o site será solicitado um login de acesso. Os administradores do site terão acesso a mais funcionalidades.  |
| Objetivo do Teste 	|Verificar se irá apresentar uma mensagem de erro para os usuários que não estão registrados no sistema.|
| Passos 	|1- Acessar o site da aplicação / 2- Digitar um e-mail e senha inválidos / 3- visualizar a mensagem de erro|
|Critério de Êxito |1- Deverá apresentar na tela uma mensagem de erro “Wrong Username or password” / 2- a mensagem deverá ser na cor vermelha. / 3- Não deverá apresentar a homepage|
|  	|  	|
| **Caso de Teste** 	| **CT- 07 Visualizar os aniversariantes do mês**	|
|Requisito Associado |RF-03 Na página principal serão exibidos os aniversariantes daquele determinado mês ou semana.|
| Objetivo do Teste 	|Verificar a exibição correta da lista dos aniversariantes do mês.|
| Passos|1- Realizar a autenticação na página de login / 2- Visualizar a foto e nome dos aniversariantes do mês|
|Critério de Êxito |1- Deverá ser apresentado os aniversariantes do mês / 2- Deverá ser exibido o nome de cada pessoa / 3- Deverá apresentar a foto de cada pessoa / 4- Deverá listar o cargo de cada pessoa na empresa|
|  	|  	|
| **Caso de Teste** 	| **CT- 08 Acessar o portal de notícias na homepage**	|
|Requisito Associado |RF04- haverá um portal de notícias relacionadas a empresa e aos colaboradores, atualizadas esporadicamente.|
| Objetivo do Teste 	|Verificar se o portal de notícias apresentará as notícias na homepage (formato carrossel) |
| Passos|1- Acessar o site da aplicação / 2-Realizar a autenticação na página de login / 3- Visualizar a homepage|
|Critério de Êxito|1- Deverá acessar a homepage / 2- Logo em seguida aparecerá na página principal as notícias |
|  	|  	|
| **Caso de Teste** 	| **CT- 09 Acessar a página de abertura de chamados**	|
|Requisito Associado |RF05- O site deve oferecer funcionalidade para abertura e acompanhamento do andamento de chamadas de TI.|
| Objetivo do Teste 	|Possibilitar o usuário a descrever o máximo de informação referente ao seu chamado para que o problema possa ser sanado. |
| Passos |1- Acessar o site da aplicação / 2-Realizar a autenticação na página de login /3- Visualizar a homepage /4- Clicar em “Relatar um problema” / 5- Cadastrar o seu problema|
|Critério de Êxito |1- Deverá ser apresentado uma caixa para a descrição do problema. |
|  	|  	|
| **Caso de Teste** 	| **CT- 10 Acompanhar os chamados de TI**	|
|Requisito Associado |RF05- O site deve oferecer funcionalidade para abertura e acompanhamento do andamento de chamadas de TI. |
| Objetivo do Teste 	|Possibilitar o acompanhamento das chamadas de TI abertas pelo usuário.|
| Passos 	|1- Acessar o site da aplicação / 2-Realizar a autenticação na página de login /3- Visualizar a homepage /4- Clicar em “Ajuda” / 5- Acompanhar o seu problema|
|Critério de Êxito |1- Deverá ser apresentado uma lista com os chamados que estão em aberto e os já finalizados.|
|  	|  	|
| **Caso de Teste** 	| **CT- 11 Acessar Setores da empresa**	|
|Requisito Associado |RF06- Um quadro de avisos será exibido a cada funcionário, contendo informações sobre seu setor e da empresa.|
| Objetivo do Teste 	|Mostrar um quadro com todas as informações de cada setor da empresa|
| Passos|1- Acessar o site da aplicação / 2-Realizar a autenticação na página de login / 3- Visualizar a homepage / 4- Clicar no card setor da empresa desejado / 5-  Visualizar as informações|
|Critério de Êxito |1- Deverá ser apresentado informações do setor da empresa / 2- Deverá ser exibido uma imagem relacionada ao setor|
|  	|  	|
| **Caso de Teste** 	| **CT- 12 Alterar o status da chamada para "atendida" ou "em andamento".**	|
|Requisito Associado |RF07- O Suporte poderá visualizar chamadas pendentes e alterar o status para "atendida" ou "em andamento".|
| Objetivo do Teste 	|Mostrar uma lista com os chamados em andamento ou já finalizados e alterar seu status.|
| Passos|1- Acessar o site da aplicação / 2-Realizar a autenticação na página de login / 3- Visualizar a homepage / 4- Clicar em "Ajuda" / 5-  Visualizar as informações / 6- Alterar o status da chamada|
|Critério de Êxito |1- Deverá ser apresentado uma lista com as chamadas em aberto ou já finalizadas / 2- Deverá ser possível alterar o status para "atendida" ou "em andamento"|
