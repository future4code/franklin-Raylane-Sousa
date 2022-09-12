
import { InterfaceClientLbn } from "../models/InterfaceClientLbn";
import { PlaceCommerce } from "../places/PlaceCommerce";

export class CommercialClient extends PlaceCommerce implements InterfaceClientLbn {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cnpj: string,
      floorsQuantity: number,
      cep: string
    ) {
      super(floorsQuantity, cep);
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.53;
    }
  
    public getCnpj(): string {
      return this.cnpj;
    }

    public getName(): string {
      return this.name;
    }
  }