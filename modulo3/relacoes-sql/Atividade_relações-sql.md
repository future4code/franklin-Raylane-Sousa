# Atividade Relações SQL 

## Exercício 1  (1:1)

### a) O que é uma chave estrangeira? 

~~~
Uma chave estrangeira(foreign key) se refere ao tipo de relacionamento entre distintas tabelas de dados do banco de dados. Uma chave estrangeira é chamada quando há o relacionamento entre duas tabelas.
~~~

### b) Criando e populando a tabela de avaliação: 
~~~SQL
CREATE TABLE Evaluation (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id int,
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)
~~~

~~~SQL
INSERT INTO Evaluation (id, comment, rate, movie_id) 
VALUES ("001", "Uma ótima comédia de costumes", 3,"1");

INSERT INTO Evaluation (id, comment, rate, movie_id) 
VALUES 
("002", "A adaptação do segundo livro da série supera em todos os aspectos", 6,"2"), 
("003", "O filme te encanta te prende durante todo o tempo, te faz rir e se emocionar..", 10,"3"),
("004", "A melhor saga de toda a vida", 10,"4"),
("005", "No geral, deu tudo certo", 8,"5"),
("006", "Não é filme mas é tão bom que tem que estar na lista", 10,"6");
~~~

### d) Alterando a tabela filmes para que ela não tenha mais a coluna de avaliação
~~~SQL
ALTER TABLE Movie DROP COLUMN evaluation
~~~

## Exercício 2  (N:M)

~~~SQL
CREATE TABLE MovieCast (
		movie_id int,
		actor_id int,
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
~~~

### a) Explicando a tabela de 'elenco do filme'

~~~SQL
Esta tabela representa o relacionamento entre um ator e um filme, onde um ator pode fazer parte do elenco de vários filmes e filmes distintos também podem ter mais de um ator. 
~~~

### b) Criando ao menos 6 relações na tabela MovieCast
~~~SQL
INSERT INTO MovieCast (movie_id, actor_id)
VALUES 
("001","006"),
("002","007"),
("003","004"),
("004","002"),
("005","004"),
("006","003")
~~~

### c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query
~~~SQL
Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha (`franklin-raylane-sousa`. `MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERÊNCIAS `Actor` (`id`)) 0,875 seg
~~~

~~~
O erro ocorre pois a tabela possui uma chave estrangeira relacionada a tabela Actor, portanto se tentamos inserir dados relacionados a um id que não existe o erro ocorre.
~~~

### d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query

~~~SQL
DELETE FROM Actor WHERE id = 6
~~~

~~~SQL
Não foi possível excluir o Actor pois ele possui relação com outra tabela 

Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha 
~~~

## Exercício 3  (INNER JOIN)

~~~SQL
SELECT * FROM Movie 
INNER JOIN Evaluation ON Movie.id = Evaluation.movie_id;
~~~

~~~SQL
SELECT *
FROM Movie, Evaluation
WHERE Movie.id = Evaluation.movie_id
~~~ 

### a) Explicando a query acima

~~~
Query que retorna os filmes que já foram avaliados e as suas respectivas avaliações.
INNER JOIN permite a junção de duas ou mais tabelas desde que estejam relacionadas por uma Foreign Key
ON utilizado quando se define uma junção de forma explícita, onde especificamos o tipo de JOIN
WHERE é usando quando se define uma junção implícita, não especificando o tipo de JOIN 

~~~

### b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.
~~~SQL
SELECT Movie.title, Movie.id, Evaluation.rate FROM Movie 
INNER JOIN Evaluation ON Movie.id = Evaluation.movie_id;
~~~ 

# Desafios 

## Exercício 4 (JOIN: LEFT JOIN e RIGHT JOIN)

### a) Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). A sua query deve retornar somente o nome, id, nota do filme e comentário.

~~~SQL
SELECT Movie.id as IdMovie, 
Movie.title as Title, 
Evaluation.rate as Rate, 
Evaluation.comment as Comment
FROM Movie
LEFT JOIN Evaluation ON Movie.id = Evaluation.movie_id;
~~~ 

### b) Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. A sua query deve retornar o id do filme, título do filme e id do ator

~~~SQL
SELECT Movie.id as idMovie, Movie.title as Title, MovieCast.actor_id FROM Movie
RIGHT JOIN MovieCast ON MovieCast.movie_id = Movie.id;
~~~ 

### c) Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda)

~~~SQL
SELECT AVG(Evaluation.rate) as Average, Movie.id as MovieId, Movie.title FROM Movie
LEFT JOIN Evaluation ON Movie.id = Evaluation.movie_id
GROUP BY (Movie.id);
~~~ 

## Exercício 5 (Relação M:N nas tabelas Movie, Actor e MovieCast)

### ALIAS
~~~
Os `aliases` SQL são usados ​​para fornecer um nome temporário a uma tabela ou coluna em uma tabela.
São frequentemente usados ​​para tornar os nomes das colunas mais legíveis.
Um alias existe apenas durante essa consulta, palavra chave AS~
~~~
### JOIN 
~~~
Para unir as informações de três tabelas de uma vez, precisamos usar o operador JOIN duas vezes, mas em uma ordem que faça sentido. Primeiro, unimos **uma** das tabelas independentes (`Movie` e `Actor`) com a tabela de junção `MovieCast`, e, só então, unimos com a outra tabela independente
~~~
~~~SQL
SELECT * FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
~~~

### a) Explique, com suas palavras essa query. Por que há a necessidade de dois `JOIN`?

~~~
É possivel utilizar mais de um JOIN para fazer a junção de mais de duas tabelas, contando que a ordem de junção faça sentido. No exemplo, o primeiro JOIN faz a junção da tabela Movie com a MovieCast relacionada ao seu id, e 
o segundo JOIN faz a junção da tabela Actor relacionado seu id ao da tabela MovieCast.
A cada junção utilizamos um JOIN.
~~~

### b) Altere a query para que ela retorne o id e o título do filme, e o id e o nome do ator. Coloque `alias` para facilitar o endentimento do retorno da query

~~~SQL
SELECT m.id as idMovie, m.title as MovieTitle, a.id as idActor, a.name as ActorName FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
~~~

### c) A query abaixo **deveria** ser a resposta do item b. Tente rodá-la. Anote e explique o resultado.

~~~SQL
SELECT m.id as movie_id, m,title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

 Código de erro: 1054. Coluna desconhecida 'm' na 'lista de campos' 


 A vígula em 'm,title' o sistema está tentando reconhecer 'm' como uma coluna 
~~~

### d) Desafio: Faça uma query que retorne todos os filmes com o nome de seus atores e as suas avaliações (nota e comentário)

~~~SQL
SELECT m.id as idMovie, m.title as MovieTitle, 
a.name as NameActor, 
e.rate, e.comment 
FROM Movie m
LEFT JOIN Evaluation e on e.movie_id = m.id
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
~~~

## Exercício 6 (Relação M:N)


### a) Que tipo de relação é essa?

~~~
M:N. Por que um óscar pode ser dado a vários filmes e um filme também pode ganhar vários óscar.
~~~

### b) Explicite a query que você usou para criar a tabela

~~~SQL
CREATE TABLE oscarAward (
id int auto_increment PRIMARY KEY,
id_movie int,
oscar_name VARCHAR(255) NOT NULL,
date_award date,
FOREIGN KEY (id_movie) REFERENCES Movie(id)
);
~~~

### c) Crie ao menos 2 óscar para cada um dos filmes

~~~SQL
INSERT INTO oscarAward(id, id_movie, oscar_name, date_award)
VALUES(1,"003","Óscar de melhor filme", "1998-03-02")
~~~

### d) Faça uma query que retorne todos os filmes e seus respectivos óscar

Retorna título do filme, nome e data do óscar de todos os filmes (mesmo que algum deles estejam sem óscar)
~~~SQL
SELECT m.title as MovieTitle, oa.oscar_name, oa.date_award FROM Movie m
LEFT JOIN oscarAward oa ON m.id = oa.id_movie;
~~~

~~~SQL
SELECT * FROM Movie m
LEFT JOIN oscarAward oa ON m.id = oa.id_movie;
~~~

Retorna apenas filmes com óscar (JOIN / INNER JOIN)
~~~SQL
SELECT * FROM Movie m
INNER JOIN oscarAward oa ON m.id = oa.id_movie;
~~~