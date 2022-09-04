# Exercício - Herança e Polimorfismo

## HERANÇA 

### Exercício 001

a) *Seria possível imprimir a senha (`password`) atrelada a essa instância?*

- Não, pois não foi criado um getter para esse atributo privado.

b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*

- A mensagem foi impressa uma vez. 

### Exercício 002

a) *Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal?* 

- A mensagem foi impressa uma vez.

b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?*

- A mensagem foi impressa uma vez, por que a classe customer é uma extensão da classe UserLbn. 

### Exercício 003

- As propriedades que uma classe filha herda de uma classe Pai se tornam públicas (são visíveis), ainda que especificadas como private.
- Para isso o ideal é utilizar protected.


### Exercício 008

a) *Crie uma instância da classe `Seller`. Você vai reparar que essa classe já possui um construtor, pois quando **não colocamos um construtor na classe filha**, ela **herda** o construtor da classe Pai. Quais parâmetros você teve que passar para esse construtor?*

- Os parâmetros passados foram os mesmos da classe Pai 

~~~
const seller01 = new SellerLbn('001', 'user@email', 'Doe', '1222', 1200, admDate )
console.log(seller01)
~~~

b) *Imprima todas as informações da instância que você criou individualmente (ou seja, cada uma em uma linha própria). O que você conseguiu imprimir? O que não conseguiu? Por quê?*

- Foi possivel vizualizar apenas as informações que possuem um getter na classe herdada

### Exercício 009

a) Agora, teste o método setter, atualizando esse valor para o que você quiser. É possível imprimir no terminal o valor salesQuantity da instância que você criou? Por quê?

-

## POLIMORFISMO

### Exercício 001

*a) Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?*
~~~
  name: 'Jake',
  registrationNumber: 1,
  consumedEnergy: 100,
  calculateBill: [Function: calculateBill]
~~~
- Para visualizar o valor do método calculateBill utilizei ClientLbn.calculatedBill

### Exercício 02

CLASSE ABSTRATA
~~~
Porque representa algum tipo de informação que simplesmente *abstrai* e *armazena* as características em comum de um conjunto de outras classes. Por ser abstrata, *não podemos criar uma instância dela*. Essa é uma regra da Programação Orientada a Objetos e válida para todas as linguagens.
~~~

a) *Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: `new Place(...)`). Qual foi o erro que o Typescript gerou?*
~~~
error TS2511: Cannot create an instance of an abstract class.
~~~

~~~
"Uma classe abstrata não pode ter um objeto criado a partir de sua instanciação. Essas classes são muito importantes quando não queremos criar um objeto a partir de uma classe “geral”, apenas de suas “subclasses” "
~~~

b) *Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?*

- Criando outra classe que herde as caracteristicas da classe abstrata
- Instânciando um objeto a partir da classe criada

### Exercício 03

1) *O que precisaríamos fazer para conseguir efetivamente criar uma instância da classe Place? (última pergunta do exercício anterior)*
 - Precisamos criar uma classe que herde (extends) a classe abstrata modelo.
 - "Para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última."

2) *Por que a `Place` não é uma interface?*
- Place é uma classe porque precisa ter um acesso restrito a um dos seus atributos, o que é impossível de se fazer em interfaces.
~~~
Uma classe abstrata pode conter métodos completos ou incompletos. Uma Interface pode conter apenas a assinatura de um método, mas nenhum corpo ou implementação. Portanto, essa classe pode implementar métodos, mas em uma Interface, não
~~~

3) *Por que a classe `Place` é uma Classe Abstrata?*
- Por que ela serve como modelo para outras classe que herdem dela as caracteristicas
- A classe abstrata não pode ser instanciada diretamente, ou seja um objeto pode ser herdado, mas não criar uma classe de forma direta usando sua palavra-chave.
- Deve ser instânciada por uma subclasse concreta ou definindo todos os métodos abstratos junto à nova instrução

### EXERCÍCIO 04

*a) Que métodos e propriedades essa classe possui? Por quê?*
- A classe não possui métodos próprios. 
- A classe possui apenas uma propriedade CPF, as outras propriedades são herdadas e implementadas pelas classes PlaceResidential e InterfaceCLient.

~~~
Uma vez que o CPF não pode mudar e não teremos uma classe filha da ResidentialClient (assim, protected não faz sentido)
~~~


### EXERCÍCIO 05 

a) *Quais as semelhanças dessa classe com a `ResidentialClient`?*

- Ambas são subclasses;
- Ambas implementam(implements) a clase InterdfaceClientLbn;
- Possuem construtor, getters e setters.

b) *Quais as diferenças dessa classe com a `ResidentialClient`?*

- A classe possui o atributo *cnpj*;
- O calculo do valor da conta de energia muda para *(quantidade de energia) x 0.53*;
- A classe é filha (extends) de PlaceCommerce que possui o atributo *floorsQuantity* .

### EXERCÍCIO 06

a) *De* qual classe a `IndustrialClient` deve ser filha? Por quê?*

- Da classe PlaceIndustry, pois precisará ter o atributo *machinesQuantity*

b) *Que interface a `IndustrialClient` implementa? Por quê?*
- A interfacer *InterfaceClientLbn* pois utilizará os atributos também, assim como as classes anteriores.

c) *Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?*

### POLIMORFISMO
~~~
Devido à propriedade do Polimorfismo, uma classe filha de uma classe pai é também do mesmo tipo da pai.
~~~

### CLASSES ABSTRATAS

~~~
Pode-se dizer que as classes abstratas servem como “modelo” para outras classes que dela herdem, não podendo ser instanciada por si só. Para ter um objeto de uma classe abstrata é necessário criar uma classe mais especializada herdando dela e então instanciar essa nova classe. Os métodos da classe abstrata devem então serem sobrescritos nas classes filhas.
~~~

### INTERFACE 

~~~
Uma interface é uma classe que contém especificações que serão usadas pelas outras classes. Ou seja, ela tem por objetivo criar um contrato que deverá ser obedecido nas classes onde for implementada. Os métodos criados na interface não têm corpo, apenas assinatura
~~~

~~~
interface Pessoa {}
~~~

~~~
class PessoaFisica implements Pessoa {}
~~~

### QUANDO CRIAR CLASSES PARA UMA ENTIDADE ?

 "*Quando estamos modelando e encontramos uma situação dessa - três "entidades" muito diferentes - é um indício de que cada uma pode ter a sua própria classe. Assim, teremos mais liberdade para criar os métodos, as propriedades e os construtores para cada uma da melhor forma.*"


LINKS CONSULTADOS

https://www.treinaweb.com.br/blog/classes-abstratas-vs-interfaces

https://www.digitalhouse.com/br/blog/classe-abstrata

