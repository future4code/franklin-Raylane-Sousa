# EXERCÍCIO 

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
O primeiro endpoint modificado foi o de cadastro de usuário, pois nele ocorre o processo de criptografia da senha do usuário a ser armazenada no banco de dados. 

~~~

d) *No exercício de ontem, nós criamos o endpoint `user/profile`. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.*

~~~
Não pois o endpoint apenas utiliza o token para exibir as informações.

~~~