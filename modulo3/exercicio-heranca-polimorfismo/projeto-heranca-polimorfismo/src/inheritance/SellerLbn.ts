import { EmployeeLbn } from "./EmployeeLbn";
import { UserLbn } from "./UserLbn";

export class SellerLbn extends EmployeeLbn {
     private sales: number = 0;
     static SELL_COMISSION: number = 5


   /*  public getSales(): number {
        return this.sales
    }
 */
    public setSales(sales: number): void {
      this.sales = sales
    }

    public calcTotalSalary(): number {
        return (
          this.baseSalary * EmployeeLbn.BONUS + SellerLbn.SELL_COMISSION * 5
      )
    }
  }