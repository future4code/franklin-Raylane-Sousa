## CASE FULL STACK - API E APP PIZZARIA 

## FERRAMENTAS (Backend | Frontend)

- Nodejs
- Express
- React
- Bibliotecas (---)

## Descrição do Projeto

### PIZZARIA 

Esta aplicação tem o propósito de expor uma API JSON para ser consumida por um cliente front-end para pedido de pizza.

## ENDPOINTS  (devem retornar uma resposta JSON)

~~~Typescript 

/api/pizzas  (lista de pizzas)
/api/orders (lista de pedidos)
/api/orders/:id (detalhes de um pedido individual)

~~~

### Exemplo lista de pizzas (/api/pizzas)

~~~JSON
{
    "name" : "Marguerita" ,
    "price" : 5,
    "ingredients" : [
      "tomate" ,
      "mussarela"
    ]
}
~~~

## ENTIDADES E RELAÇÕES

- User - usuário que realizou o pedido (id, name, password) 
- Pizza - tem nome e preço (por exemplo, Margherita $ 5, Pepperoni $ 6, ...)
- Order - tem o detalhe do pedido realizado 

## PIZZA (id, nome, preço e ingredientes da pizza)

~~~JSON
{
    "id": "01",
    "name": "Calabria",
    "price" : 5,
    "ingredients" : [
      "tomate" ,
      "mussarela",
      "orégano"
    ]
}
~~~

## ORDER ( id, itens do pedido, total, id usuário que fez o pedido) (N - M)

~~~JSON
{   
    "id": "PO01",
    "ordersItem": ["Calabria", "Marguerita"],
    "total": 10,
    "id_user": "abc-id-001" (fk)
}
~~~

## TABELA USER (Usuário cliente) 

~~~JSON
{   
    "id_user": "abc-id-001",
    "name": "Jake",
    "password": "123@123"
}
~~~
