import { CustomerLbn } from "./CustomerLbn"
import { UserLbn } from "./UserLbn"

console.log("Hello, world!")
/* EXERCÍCIO 001 --> Análise da classe UserLbn <--
a) Seria possível imprimir a senha (`password`) atrelada a essa instância?

R= Não, pois não foi criado um getter para esse atributo privado.

b) Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? 
R= A mensagem foi impressa uma vez. 

*/

const user01 = new UserLbn('01','ray@email.com','Raylane Nara','123@3306')
console.log(user01)

/* EXERCÍCIO 002 --> Análise da classe CustomerLbn <--
a) Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal? 

R= A mensagem foi impressa uma vez.

b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?

R= A mensagem foi impressa uma vez, por que a classe customer é uma extensão da classe UserLbn. 

*/

const customer01 = new CustomerLbn('01','ray@email.com', 'Raylane Nara','123@3306', '123456789')

console.log(customer01)

