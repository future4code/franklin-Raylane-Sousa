import { UserLbn } from "./UserLbn";

export class CustomerLbn extends UserLbn {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string,
      purchaseTotal: number
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
      this.purchaseTotal = purchaseTotal;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }

    public getPurchase(): number {
      return this.purchaseTotal;
    }

  }