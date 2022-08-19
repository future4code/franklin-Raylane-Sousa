# Exercício - Aula Aprofundamento SQL
===============
```
Para os exercícios de UPDATE e DELETE, o SQL exige que você desative os Safe Updates. Para fazer isso, rode o seguinte comando no seu Workbench: SET SQL_SAFE_UPDATES = 0;
```

## Exercício 001
### **Leia os comandos SQL e descreva o que eles fazem.**

a) Este comando altera a estrutura de uma tabela, removendo a coluna 'salary'.
~~~sql
ALTER TABLE Actor DROP COLUMN salary;
~~~

O comando DROP também pode ser utilizado para remover uma tabela. 
~~~sql
DROP TABLE Actor
~~~

b) Este comando muda o nome da coluna 'gender' para 'sex' e define seu tipo VARCHAR(6)
~~~sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
~~~

c) Este comando muda o nome da uma coluna chamanda 'gender' para o mesmo nome definindo um tipo VARCHAR(255). Ou, se realizando na sequência do exercício tentaria mudar o nome de uma coluna que não existe mais. 
~~~sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
~~~

c) Altrando a quantidade de caracteres que a variável da coluna gender aceita.  
~~~sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
~~~

## Exercício 002
### **Atualizar dados na tabela**

a) Query que atualiza o nome e data de nascimento do ator com o id 003

~~~sql
UPDATE Actor SET name = "", birth_date = "" WHERE id = "003"
~~~
Comando utlizado para alterar o genero do Ator
~~~sql
UPDATE Actor SET name = "Will Smith", birth_date = "1968-09-25", gender = "male" WHERE id = "003"
~~~

b) Query que atualiza o nome da atriz Juliana Paes para JULIANA PAES 
Atualiza nome Juliana Paes para letras maiúsculas
~~~sql
UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes"
~~~
Renomeia o nome da atriz para formatação padrão
~~~sql
UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES"
~~~

c) Query que atualiza todas as informações do ator com o id="005"
~~~sql
UPDATE Actor SET name="", salary="", birth_date="", gender="", fav_ice_cream_flavor="" WHERE id = "005"
~~~

d) Query com valor inválido
O comando deu check porém não afetou nenhum registro da tabela. Não existe nome 'sasha'
~~~sql
UPDATE Actor SET name = "Rami Malek" WHERE name = " sasha"
~~~

## Exercício 003
**Comando DELETE**
a) Query que apaga a atriz com nome 'Fernanda Montenegro'
~~~sql
DELETE FROM Actor WHERE name = "Fernanda Montenegro"
~~~

b) Query que apaga todos os atores do gênero masculino 'male' com o salário maior que 1.000.000,00
Não afetou nenhuma linha da tabela pois não tem Ator com o salário maior que o valor especificado.

~~~sql
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000
~~~

## Exercício 004
### **Função MySQL. (COUNT, que permite contar a quantidade de elementos)**

a) Escreva uma query que pegue o maior salário de todos os atores e atrizes
~~~sql
SELECT MAX(salary) FROM Actor
~~~

b) Escreva uma query que pegue o menor salário das atrizes
~~~sql
SELECT MIN(salary) FROM Actor WHERE gender = "female"
~~~

c) Escreva uma query que pegue a quantidade de atrizes
~~~sql
SELECT COUNT(*) FROM Actor WHERE gender = "female"
~~~

d) Escreva uma query que pegue a soma de todos os salários
~~~sql
SELECT SUM(salary) FROM Actor
~~~

## Exercício 005
**Operações indicadas por LIMIT, ORDER BY e GROUP BY**

a) Releia a última query. Teste-a. Explique o resultado com as suas palavras

A query retorna a quantidade de atores por genero, 'female' e 'male' 
~~~sql 
SELECT COUNT(*), gender FROM Actor GROUP BY gender
~~~
b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética
~~~sql
SELECT id, name FROM Actor ORDER BY name DESC;
~~~

c) Faça uma query que retorne todos os atores ordenados pelo salário

~~~sql
SELECT * FROM Actor ORDER BY salary;
~~~

d) Faça uma query que retorne os atores com os três maiores salarios
~~~sql
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
~~~
e) Faça uma query que retorne a média de salário por gênero

~~~sql
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
~~~

## Exercício 006
**Alterar tabela Movie**

a) Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date
~~~sql
ALTER TABLE Movie ADD playing_limit_date DATE;
~~~

b) Altere a tabela de Movie para que o parâmetro rating possa aceitar valores não inteiros, como, por exemplo, uma avaliação 8.5.
~~~sqlb
ALTER TABLE Movie CHANGE evaluation evaluation FLOAT;
~~~

c) Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído

~~~sql

UPDATE Movie SET playing_limit_date = "2021-12-20" WHERE id = "001" 
~~~

~~~sql
UPDATE Movie SET playing_limit_date = "2022-09-20" WHERE id = "003"
~~~

d) Delete alguns dos filmes mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.

DELETE FROM Movie WHERE id = "001"