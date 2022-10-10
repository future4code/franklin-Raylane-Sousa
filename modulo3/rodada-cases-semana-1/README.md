# Desafio back-end AMARO

## API PARA CADASTRO E CONSULTA DE PRODUTOS

Esta API efetua o cadastro e consulta de usuários e produtos.

## Execução do projeto

### 

~~~
    git clone <link repo>

    npm install

    npm run start:dev
~~~
 
### Migrar tabelas e dados 

~~~
npm run migrations
~~~

## Entidades 

- AmaroProducts
- AmaroTags
- AmaroUsers

## Autenticação

```
Token JWT - jsonwebtoken 
```

## Endpoints

### Products (/products)

- Cadastrar um produto 
- Listar todos os produtos
- Listar todas as tags
- Consultar um produto pelo id
- Consultar informações de produto por tag

### Users (/users)

- Criar um usuário
- Efetuar o login
- Listar todos os usuários 
- Deletar um usuário 
- Editar informações de um usuário 

## Requisitos gerais 

- Ao efetuar o login o usuário recebe um token de autenticação.
- Para cadastrar um produto o usuário precisa estar logado.
- Para ter a lista de todos os usuários cadastrados é preciso estar logado.
- Apenas administradores podem deletar um usuário.
- Administradores podem editar informações de todos os usuários.
- Um usuário pode editar apenas as informações do próprio cadastro.

## Testes 

- Framework de testes Jest

~~~
"scripts": {
    "test": "jest",
    "test:coverage": "jest --coverage"
  }
~~~

### Database
- [x] - Conexão com banco de dados

### User

Casos de sucesso
- [X] - Criar um usuário
- [X] - Fazer login

Casos de erro ao criar um usuário:
- [X] - Passando um parâmetro vazio 
- [X] - Com o formato de e-mail incorreto.
- [X] - Quando o e-mail já existe.
- [X] - Quando a senha possui parâmetro inválido.
- [X] - Com o e-mail vazio
- [X] - Com e-mail não registrado
- [X] - Com a senha incorreta

### Product
Casos de sucesso ao criar um produto
- [X] - Criar um produto com sucesso

Casos de erro ao criar um produto:
- [X] - Sem passar o token
- [X]-  Com o token incorreto
- [X] - Com o id vazio
- [X] - Com o id existente
- [X] - Com um nome inválido