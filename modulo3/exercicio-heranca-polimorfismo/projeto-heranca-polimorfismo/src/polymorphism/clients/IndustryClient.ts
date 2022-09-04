import { InterfaceClientLbn } from "../models/InterfaceClientLbn";
import { PlaceIndustry } from "../places/PlaceIndustry";

export class IndustryClient extends PlaceIndustry implements InterfaceClientLbn {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private insdustryNumber: string,
      machinesQuantity: number,
      cep: string
    ) {
      super(machinesQuantity, cep);
    }
  
    public getIndustryNumber(): string {
      return this.insdustryNumber;
    }

    public getName(): string {
        return this.name;
      }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
  }