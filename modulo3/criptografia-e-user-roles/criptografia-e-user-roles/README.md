# EXERCÍCIO CRIPTOGRAFIA E USER ROLES

## 01 
a) *O que são os `round` e `salt`? Que valores são recomendados para o `round`? Que valor você usou? Por quê?*

 ~~~
 ROUND: é um fator chamado também de *cost* (custo numérico) que está relacionado a segurança da senha, quanto maior o custo numérico, maior o tempo de execução do algoritmo. 
 SALT: é uma string aleatória com 22 caracteres que é adicionada na senha pelo algoritmo antes de criar o hash, ela que evita ataques chamados de *rainbow table*
 VALOR RECOMENDADO PARA O ROUND: o ideal é utilizar o maior valor que conseguir para otimizar o tempo de execução.
 VALOR UTILIZADO: o valor utilizado nos exercícios foi 12 por recomendação de ser o padrão para a maioria das libs.
 ~~~


## 02

a) *Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.*

~~~
O primeiro endpoint modificado foi o de cadastro de usuário, pois nele ocorre o processo em que o usuário fornece a senha e ela é criptografada e armazenada no banco de dados. Após isso, será modificado o endpoint de login, onde será realizada a comparação.

~~~

d) *No exercício de ontem, nós criamos o endpoint `user/profile`. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.*

~~~
Não pois o endpoint apenas utiliza o token para exibir as informações.

~~~

______________________________________________________________________

Autorização e User Roles
Sign up:  irá receber um tipo e salvar no banco / usará o tipo para salvar no token
Login: continuará recebendo e devolvendo a mesma coisa / usará o tipo apra salvar no token

-Front deve informar um role("normal" ou "admin") no endpoint de cadastro
-essa informacao deve ser guardada tanto no banco quando nos tokens gerados no cadastro e no login
-Somente usuários Admin podem acessar o endpoint de editar usuário.

## 03

a) *Altere a sua tabela de usuários para ela possuir uma coluna `role`. Considere que pode assumir os valores `normal`  e `admin`. Coloque `normal` como valor padrão.*

b) *Altere o type `AuthenticationData e a função getData()` para representarem esse novo tipo no token.*

c) *Altere o cadastro para receber o tipo do usuário e criar o token com essa informação. (Não esqueça de adicionar na função query para inserir agora o valor de role do usuário à coluna role no banco)*

d) *Altere o login para criar o token com o `role` do usuário*


