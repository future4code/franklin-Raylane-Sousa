## INTRODUÇÃO A SQL - EXERCÍCIO LABENU

### Exercício 01

1. CRIANDO TABELA (CREATE TABLE)

a) 
```sh
-CREATE TABLE nometabela (); : sintaxe
-VARCHAR: indica valor que suporta 255 caracteres.
-PRIMARY KEY: indica chave primária da tabela.
-FLOAT: indica valores com ponto flutuante.
-DATE: indica valor do tipo data.
-NOT NULL: determina que o valor não pode ser nulo.
```

b)
-SHOW DATABASE: exibe todos os bancos de dados existentes.
SHOW TABLES: exibe todas as tabelas existentes em um determinado banco de dados.

c) 
DESCRIBE Actor
Exibe a estrutura detalhada dos campos e tipos da tabela Actor.

### Exercício 02

2. INSERINDO DADOS NA TABELA
a)Inserindo resgistro na tabela Actor
```sh
 INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

b) Código de erro ao tentar adicionar outro registro com o mesmo id.
O erro ocorre por que não podemos ter mais de uma chave primária com o mesmo valor
```sh
Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'
```
c) Código de erro ao tentar adicionar outro registro sem indicar o nome das duas ultimas colunas da tabela.
```sh
Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha
```
d) Código de erro ao tentar adicionar registro sem indicar o coluna e o valor do campo 'name'
Ocorre pois o sistema identifica que o campo nome não tem tipo indicando que ele deve ser incrementado automaticamente com um valor padrão.
```sh
Código de erro: 1364. O campo 'nome' não tem um valor padrão
```
e) <--NAO ENTENDIIIII NADA ->

### Exercício 03

3. 
a) Escreva uma query que retorne todas as informações das atrizes.
```sh
SELECT * from Actor WHERE gender = "female";
```
b) Escreva uma query que retorne o salário do ator com o nome Tony Ramos
```sh
SELECT  salary from Actor WHERE name = "Tony Ramos"
```
c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.
Não retornou nenhum resultado pois não há campo com valor de gênero inválido.
0 Row(s) returned 
```sh
SELECT * from Actor WHERE gender = "invalid";
```
d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000
```sh
SELECT  id, name, salary from Actor WHERE salary < 500000
```
e) Teste a query, anote o erro e explique.
 
Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos' 

-O nome correto da coluna é name.
```sh
SELECT id, name from Actor WHERE id = "002"
```

### Exercício 04

4. 
a) Explique a query:

```sh
SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%J%") AND salary > 300000
```
- Selecione tudo da tabela Actor, onde o nome começa com A ou com J, e o salário maior que 300000.

b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00

```sh
SELECT * FROM Actor
WHERE (name NOT LIKE "%A%") AND salary > 350000
```

c) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome. 
```sh
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";
```
d)  Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00
```sh
SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
```

### Exercício 05

5. criar tabela FILMES
a) Escreva a query que cria essa tabela.
```sh
CREATE TABLE Movie (
	  id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT(500) NOT NULL,
    release_Date DATE NOT NULL,
    evaluation INT(10) NOT NULL
)

```
b) INSERIR INFORMAÇÕES NA TABELA MOVIE

### Exercício 06

6. CRIAR QUERY

a) Retorne o id, título e avaliação a partir de um id específico;
```sh
SELECT id, title, evaluation FROM Movie WHERE id = "003";
```

b) Retorne um filme a partir de um nome específico;
```sh
SELECT * FROM Movie WHERE title = "Àguas Profundas";
```

c) Retorne o id, título e sinopse dos filmes com avaliação mínima de 7
```sh
SELECT id, title, synopsis FROM Movie WHERE evaluation > 7;
```

### Exercício 07

7. Escreva a query

a) que retorne um file que contenha a palavra vida (Profundas) 
```sh
SELECT * FROM Movie WHERE title LIKE "%Profundas%";
```

b) Pesquise por um filme
```sh
SELECT * FROM Movie WHERE title LIKE "%vida%" OR synopsis LIKE "%vida%";
```

c) Procure por todos os filmes que ja tenham sido lançados
```sh
SELECT * FROM Movie
WHERE release_Date < "2022-08-16";
```

d) ) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que 7
```sh
SELECT * FROM Movie
WHERE release_Date < "2022-08-16" AND 
      (title LIKE "%Titanic%" OR
      synopsis LIKE "%vida%") AND evaluation > 7;
```