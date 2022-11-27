# Arquitetura da Solução

Essa unidade contém informações sobre a arquitetura da solução, isto é, como o software será estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

O primeiro ítem é o diagrama de classes, nele são exibidas as classes que serão criadas e como será o relacionamento entre elas. Seguito do modelo de entidades de relacionamento, projeto da base de dados, e por fim informações sobre as tecnologias utilizadas e hospedagem da solução.

## Diagrama de Classes
O diagrama de classes contém informações sobre as classes que serão criadas para construção do sistema.
Cada caixa de informação que o contém informa o nome da classe, seus atributos e seus métodos. Por padrão, os atributos serão declarados como privados e os métodos como publicos. Essa informação é percebida pelos sinais que precedem os atributos e métodos, respectivamente - e +.
O relacionamento entre as classes também é indicado:
* Administradores, desenvolvedores, funcionários de suporte e de recursos humanos são tipos de Funcionários - herança;
* Cada um deles, com excessão dos funcionários do suporte podem abrir vários chamados de TI, mas cada chamado de TI é associado a um funcionário específico - associação;
* Um aniversário por sua vez é parte do funcionário, e não existe sem o funcionário. No entanto, uma mesma data pode estar associada a mais de um indivíduo, ao passo que cada indivíduo possui apenas uma data de aniversário.
Demais informações como estas podem ser percebidas na imagem abaixo:

<img src= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t5-spacenet/blob/6cc2b80c539528ffac015c046896de74db3e4e11/docs/img/Diagrama%20de%20classes.png/>


## Modelo ER (Projeto Conceitual)

O Modelo de Entidades-Relacionamentos mostra como os atributos se relacionam com as entidades

<img src = https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t5-spacenet/blob/e08b649bed5055ba46f5eab281fa2165f70b4e84/docs/img/Modelo_ER%20-%20Spacenet.png>

## Projeto da Base de Dados

A seguir temos o Diagrama de Entidades-Relacionamento onde ilustra em forma de tabela os relacionamentos identificados no Modelo ER, com as chaves primárias.
 
<img src = "https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t5-spacenet/blob/2b3d6505a61d3abf69268b990eb425aae1702343/docs/img/Diagrama%20ER%20DBMS%20(nota%C3%A7%C3%A3o%20UML).jpg">

## Tecnologias Utilizadas

* IDE: Visual Studio 
* Linguagens utilizadas no Front-end: Html, css, javascript
* Framework Front-end: Bootstrap 
* Linguagem utilizada no Back-end: C#
* Framework para integração entre back-end e banco de dados: Entity Framework 
* Banco de Dados: Microsoft SQL Server 
* Servidor em nuvem para banco de dados:  Azure 
* Versionamento: Git

## Hospedagem

Hospedaremos o site em etapas posteriores através do serviço GitHubPages disponibilizado pelo Github.
