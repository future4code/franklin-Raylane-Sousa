console.log("Hello World")

//001
class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
    cpf: string,
    name: string,
    age: number,
  ) {
    console.log("Chamando o construtor da classe UserAccount")
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }

  public getCpf(): void { //pegar o atributo
    return console.log(this.cpf)
  }

  public getInfo(): void { //pegar o atributo
    return console.log(this.name, this.age, this.cpf)
  }

  public getName(): void { //pegar o atributo
    return console.log(this.name)
  }

  public getAge(): void {
    return console.log(this.age)
  }


}

//01 b) crie uma instância dessa class

const john = new UserAccount('053.111.584', 'John Doe', 22)

//GETTERS USERACCOUNT
john.getInfo()
john.getCpf()
john.getName()
john.getAge()



//02
class Transaction {
  private date: string;
  private value: number;
  private description: string;

  constructor(date: string, value: number, description: string) {
    this.date = date;
    this.value = value;
    this.description = description
  }

  public getDescription(): void { //pegar o atributo
    return console.log(this.description)
  }

  public getValues(): void { //pegar o atributo
    return console.log(this.date, this.value, this.description)
  }

  public getInfo(): void { //pegar o atributo
    return console.log(this.description, this.value)
  }

}

const transacao01 = new Transaction('30/08/2022', 100, 'aluguel')
const transacao02 = new Transaction('01/09/2022', 105, 'energia')

//GETTERS TRANSACTION
transacao01.getValues()
transacao01.getInfo()
transacao01.getDescription()
transacao02.getValues()


// 03 - Crie uma classe Bank, que será responsável por guardar todos os dados da aplicação.

class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }

}

