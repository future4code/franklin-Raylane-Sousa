# EXERCÍCIO 01

a) Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?
~~~
Por que ao gerar o id com UUID a composição possui letras, caracteres e numeros, portando nesse sentido o ideal é utilizar o tipo string.
~~~

b) A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.

~~~typescript

function generateId(): string {
    return v4();
}

~~~

# EXERCÍCIO 02 

a) Explique o código com as suas palavras.
~~~typescript

 // VARIAVEL QUE RECEBE A TABELA "User"

const userTableName = "User";   

//CONEXAO COM O BANCO DE DADOS COM KNEX

const connection = knex({  
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
  },
});

//ENDPOINT DE CRIAÇÃO DO USUÁRIO QUE FAZ O INSERT NA TABELA "User"

const createUser = async (id: string, email: string, password: string) => {
  await connection 
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};

~~~


b) Criando tabela Usuários.

~~~sql
CREATE TABLE UserLbn (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
~~~

c) Crie uma função para ser responsável pela criação de usuários no banco.

~~~typescript
const userTableName: string = "UserLbn"
const createUser = async (id: string, email: string, password: string) => {
    await connection
      .insert({
        id,
        email,
        password,
      })
      .into(userTableName);
  };
~~~

# EXERCÍCIO 03

a) O que a linha `as string` faz? Por que precisamos usar ela ali?

~~~
Pega a senha como uma string. Utilizamos para evitar que ocorram erros de tipo no typescript.
Com o As podemos definir o tipo do dado que vai vir na requisição.
~~~

b) Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.

~~~typescript
class Authenticator {
    generateToken = (payload: authenticationData) => {
       return jwt.sign(
            payload,
            process.env.JWT_KEY as string, 
            {
                expiresIn: "5h"
            }
        )
    }

    getTokenData = (token: string) => {
        const tokenData = jwt.verify(
            token,  process.env.JWT_KEY as string, 
        )

        return tokenData
    }
}

 export type authenticationData = {
    id: string
 }
~~~

# EXERCÍCIO 04

a) Crie o endpoint que realize isso, com as funções que você implementou anteriormente.

~~~typescript
app.post('/user/signup', createUser)
~~~

b) Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`

~~~typescript
if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
~~~

c) Altere o seu endpoint para ele só aceitar uma senha com 6 caracteres ou mais

~~~typescript
 if (!req.body.password || req.body.password.length < 6) {
        throw new Error("Invalid password");
      }
~~~

# EXERCÍCIO 05

a) Crie uma função que retorne as informações de um usuário a partir do email

~~~typescript
const userTableName = "UserLbn"
const getUserByEmail = async(email: string): Promise<any> => {
   const result = await connection
     .select("*")
     .from(userTableName)
     .where({ email });

   return result[0];
  }
~~~

# EXERCÍCIO 06

a) Crie o endpoint que realize isso, com as funções que você implementou anteriormente
OK 
b) Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`
OK

# EXERCÍCIO 07

a) O que a linha `as any` faz? Por que precisamos usá-la ali?

~~~
Recebe o valor como qualquer(any) tipo
~~~

b) Crie uma função que realize a mesma funcionalidade da função acima