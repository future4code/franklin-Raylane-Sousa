
## Exercício 001 (RAW)

a) *Explique como é a resposta que temos quando usamos o `raw`.* 

```
Quando utilizamos o raw temos como resposta um array contendo outro array de objetos com as informações do resultado da query e outras informações da requisição no banco de dados.
Uma maneira de pegar apenas as informações que desejamos no banco de dados é especificar no retorno de determinada função a posição do array pretendido na resposta.
```

b) *Faça uma função que busque um ator pelo nome;*

~~~typescript
const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return result
}
~~~

c) *Faça uma função que receba um `gender` retorne a quantidade de itens na tabela Actor com esse `gender`. Para atrizes, `female` e para atores `male`.*

~~~typescript

const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);

  const count = result[0][0].count;
  return count;
};

~~~

## Exercício 002  (QUERY BUILDERS)

a) *Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão*

~~~typescript
const updateActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};
~~~

b) *Uma função que receba um id e delete um ator da tabela*

~~~typescript
const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where("id", id);
}; 
~~~

c) *Uma função que receba um `gender` e devolva a média dos salários de atrizes ou atores desse `gender`*

~~~typescript
const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
}; 
~~~

## Exercício 003  (CRIANDO ENDPOINTS)

a) *Crie um endpoint que recebe um id como params e retorna as informações do usuário*
~~~typescript
 const getActorByIdReq = async (req: Request, res: Response) => {
    try {
       const result = await getActorById(req.params.id)
   
        res.status(200).send(result)

    } catch (error) {
        console.log(error)
        res.status(500).send("An unexpected error occurred")
    }
}
~~~
b) *Crie um endpoint que retorne a quantidade de atores por genero*

~~~typescript
const countByGender = async (req: Request, res: Response) => {
    try {
       const count = await countActorsByGender(req.query.gender as string)
   
        res.status(200).send({quantidade: count})

    } catch (error) {
        console.log(error)
        res.status(500).send("An unexpected error occurred")
    }
}
~~~

## Exercício 004  (CRIANDO ENDPOINTS - ATUALIZAR E DELETAR)

a) *Endpoint para atualizar salário com id*
 ~~~typescript
const updateSalaryReq = async (req: Request, res: Response) => {
    try {
        await updateSalaryById(req.body.id, req.body.salary);
        res.status(200).send({
          message: "Success",
        });
      } catch (err) {
        res.status(400).send({
          message: err,
        });
      }
}
 ~~~
b) *Endpoint para deletar ator da tabela*
 ~~~typescript
const deleteActorReq = async (req: Request, res: Response) => {
      try {
      await deleteActorById(req.params.id);
    res.status(400).send("Sucess")
  } catch (err) {
    res.status(400).send({
      message: err,
    });
  }
}

 ~~~
# Desafios
## Exercício 005
 - ENDPOINT CRIAR TABELA FILMES

 ~~~typescript
const createMovie = async (
    id: number,
    title: string,
    synopsis: string,
    release_Date: Date,
    evaluation: number,
    playing_limit_date: Date
  ) => {
    await connection
      .insert({
        id: id,
        title: title,
        synopsis: synopsis,
        release_Date: release_Date,
        evaluation: evaluation,
        playing_limit_date: playing_limit_date,
      })
      .into("Movie");
  };

 const createMovieReq = async (req: Request, res: Response) => {
    try {
        await createMovie(
          req.body.id,
          req.body.title,
          req.body.synopsis,
          req.body.release_Date,
          req.body.evaluation,
          req.body.playing_limit_date
        );
    
        res.status(200).send({
          message: "Success"
        });
      } catch (err) {
        res.status(400).send({
          message: err,
        });
      }
}

 app.post("/movie", createMovieReq) 
 ~~~

## Exercício 006
 - ENDPOINT RETORNAR INFORMAÇOES DA TABELA FILMES COM O LIMITE MÁXIMO DE 15

~~~typescript
const getAllMoviesLimited = async (): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Movie LIMIT 15
    `);
  
    return result[0];
  };


const getAllMoviesLimitedReq = async (req: Request, res: Response) => {
    try {
        const result = await getAllMoviesLimited() 
         res.status(200).send({movies: result})
      } catch (error) {
            console.log(error)
        res.status(500).send("Unexpected error")
      }
}

app.get("/movie/all", getAllMoviesLimitedReq)
~~~

## Exercício 007
 - ENDPOINT QUE RETORNA TODOS OS FILMES QUE POSSUAM UM TERMO EM COMUM ORDENADA POR DATA DE LANÇAMENTO

~~~typescript

const getMovieByString = async (string: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Movie WHERE title or synopsis LIKE "%${string}%" ORDER BY release_Date
    `);
  
    return result[0];
  };

const getMovieByStringReq = async (req: Request, res: Response) => {
    try {
       const result = await getMovieByString(req.query.string as string)
   
        res.status(200).send(result)

    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

app.get("/movie/search", getMovieByStringReq)
~~~