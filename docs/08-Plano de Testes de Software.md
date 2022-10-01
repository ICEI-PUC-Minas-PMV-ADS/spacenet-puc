# Plano de Testes de Software

Os testes que serão realizados ao final do desenvolvimento da aplicação estão descritos a seguir:
 
| **Caso de Teste** 	| **CT- 01 Visualizar o menu de  Navegação** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-00Y - O site irá oferecer uma aba descrita “Institucional”, nela conterá sub abas categorizadas com informações de cada aplicação. |
| Objetivo do Teste 	| Verificar se o menu de navegação (institucional) está exibindo as sub abas referente a cada página da aplicação. |
| Passos 	| 1- Fazer login no site / 2- acessar a página inicial / 3- verificar o menu institucional|
|Critério de Êxito |1- Deverá ser apresentado 4 submenus (Home, serviços, ajuda e sair).
2- Cada submenu deverá ter seu ícone próprio.|
|  	|  	|
| **Caso de Teste** 	| **CT- 02 Acessar cada sub aba do menu Navegação**	|
|Requisito Associado | RF01- O site irá oferecer uma aba descrita “Institucional”, nela conterá sub abas categorizadas com informações de cada aplicação. |
| Objetivo do Teste 	| Verificar se cada sub aba do menu navegação está direcionando para a página correta da aplicação. |
| Passos 	|1- Fazer login no site / 2- acessar a página inicial / 3- verificar o menu institucional / 4- clicar em cada sub aba |
|Critério de Êxito |1- Deverá ser apresentado 4 submenus (Home, serviços, ajuda e sair). / 2- Cada submenu deverá direcionar a aplicação específica.|
|  	|  	|
| **Caso de Teste** 	| **CT- 03 verificar a autenticação (na tela de login) de um usuário já registrado no sistema**	|
|Requisito Associado | RF02- Ao abrir o site será solicitado um login de acesso. O funcionário deverá inserir um nome de usuário, que pode ser criado pelo próprio ou disponibilizado pela empresa; uma senha também será solicitada e esta será criada ou pré-estabelecida ao colaborador. Os administradores do site terão acesso a mais funcionalidades. |
| Objetivo do Teste 	| Verificar a autenticação do usuário no sistema para ser direcionado a homepage|
| Passos 	|1- Acessar o site da aplicação / 2- Digitar seu e-mail e senha / 4- Visualizar a página de termos de uso / 3- visualizar a homepage|
|Critério de Êxito |1- Deverá ser apresentado os campos de user e senha / 2- Deverá ser apresentado o botão “enter e “or register” / 3- Deverá acessar a página de TERMOS E POLÍTICA DE USO, caso seja um usuário novo. / 4- Deverá acessar a homepage diretamente, se for um usuário que já aceitou os termos e política de uso. |1- Deverá ser apresentado os campos de user e senha / 2- Deverá ser apresentado o botão “enter e “or register” / 3- Deverá acessar a página de TERMOS E POLÍTICA DE USO, caso seja um usuário novo. / 4- Deverá acessar a homepage diretamente, se for um usuário que já aceitou os termos e política de uso. |
|  	|  	|
| **Caso de Teste** 	| **CT- 04 Verificar o comportamento da autenticação na tela de login do usuário que não está registrado no sistema.**	|
|Requisito Associado |RF02- Ao abrir o site será solicitado um login de acesso. O funcionário deverá inserir um nome de usuário, que pode ser criado pelo próprio ou disponibilizado pela empresa; uma senha também será solicitada e esta será criada ou pré-estabelecida ao colaborador. Os administradores do site terão acesso a mais funcionalidades.  |
| Objetivo do Teste 	|Verificar se irá apresentar uma mensagem de erro para os usuários que não estão registrados no sistema.|
| Passos 	|1- Acessar o site da aplicação / 2- Digitar um e-mail e senha inválidos / 3- visualizar a mensagem de erro|
|Critério de Êxito |1- Deverá apresentar na tela uma mensagem de erro “Wrong Username or password” / 2- a mensagem deverá ser na cor vermelha. / 3- Não deverá apresentar a homepage|
|  	|  	|
| **Caso de Teste** 	| **CT- 05 Verificar o registro de um novo usuário na tela de login**	|
|Requisito Associado |RF02- Ao abrir o site será solicitado um login de acesso. O funcionário deverá inserir um nome de usuário, que pode ser criado pelo próprio ou disponibilizado pela empresa; uma senha também será solicitada e esta será criada ou pré-estabelecida ao colaborador. Os administradores do site terão acesso a mais funcionalidades.|
| Objetivo do Teste 	|Conseguir registar um novo usuário|
| Passos 	|1- Acessar o site da aplicação / 2- Digitar nome, e-mail, user name e senha / 3- Clicar em register / 4- Fazer login com o username e senha registrados|
|Critério de Êxito |1- Deverá apresentar o campo com marcação em verde à medida que os dados forem preenchidos corretamente / 2- Deverá apresentar mensagem de erro caso algum campo não for preenchido ou preenchido incorretamente.|
|  	|  	|
| **Caso de Teste** 	| **CT- 06 Verificar a rota de um usuário que está logando a primeira vez no sistema.**	|
|Requisito Associado |RF02- Ao abrir o site será solicitado um login de acesso. O funcionário deverá inserir um nome de usuário, que pode ser criado pelo próprio ou disponibilizado pela empresa; uma senha também será solicitada e esta será criada ou pré-estabelecida ao colaborador. Os administradores do site terão acesso a mais funcionalidades.|
| Objetivo do Teste|Verificar se o usuário será direcionado à página de aceite dos Termos de uso e Política de privacidade|
| Passos |1- Acessar o site da aplicação  / 2- colocar o username e senha / 3- clicar em “aceito termos”|
|Critério de Êxito |1- O usuário deverá ser direcionado à página de aceite termos, antes de ser direcionado à homepage / 2- Aceitar os termos e ser direcionado à homepage.|
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
|Requisito Associado |RF05- O site deve oferecer funcionalidade para abertura de chamadas de TI.|
| Objetivo do Teste 	|Possibilitar o usuário a descrever o máximo de informação referente ao seu chamado para que o problema possa ser sanado. |Possibilitar o usuário a descrever o máximo de informação referente ao seu chamado para que o problema possa ser sanado. 
| Passos |1- Acessar o site da aplicação / 2-Realizar a autenticação na página de login /3- Visualizar a homepage /4- Clicar em “AJUDA” / 5- Cadastrar o seu problema|
|Critério de Êxito |1- Deverá ser apresentado as opções a serem preenchidas. / 2- Deverá ser apresentados as opções com a caixa para preenchimento. |
|  	|  	|
| **Caso de Teste** 	| **CT- 10 Acessar Setores da empresa**	|
|Requisito Associado |RF06- Um quadro de avisos será exibido a cada funcionário, contendo informações sobre seu setor e da empresa.|
| Objetivo do Teste 	|Mostrar um quadro com todas as informações de cada setor da empresa|
| Passos|1- Acessar o site da aplicação / 2-Realizar a autenticação na página de login / 3- Visualizar a homepage / 4- Clicar no card setor da empresa desejado / 5-  Visualizar as informações|
|Critério de Êxito |1- Deverá ser apresentado informações do setor da empresa / 2- Deverá ser exibido uma imagem relacionada ao setor|





#MODELO PARA PREENCHIMENTO DA TABELA
|  	|  	|
| **Caso de Teste** 	| ** **	|
|Requisito Associado |  |
| Objetivo do Teste 	| |
| Passos 	||
|Critério de Êxito ||
