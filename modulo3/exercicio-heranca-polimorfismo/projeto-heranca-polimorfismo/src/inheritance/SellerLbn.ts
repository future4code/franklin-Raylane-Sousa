import { UserLbn } from "./UserLbn";

export class SellerLbn extends UserLbn {
    private sales: number;


    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      sales: number
    ) {
      super(id, email, name, password);
      this.sales = sales;
    }

    public getSales(): number {
        return this.sales
    }

    public comission(): number {
        return (this.sales * 100) / 30
    }
  }