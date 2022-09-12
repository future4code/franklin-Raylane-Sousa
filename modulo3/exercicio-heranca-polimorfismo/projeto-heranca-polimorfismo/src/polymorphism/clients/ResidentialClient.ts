import { InterfaceClientLbn } from "../models/InterfaceClientLbn";
import { PlaceResidence } from "../places/PlaceResidence";

export class ResidentialClient extends PlaceResidence implements InterfaceClientLbn {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string
      ) {
        super(residentsQuantity, cep);
      }
    
      public getCpf(): string {
        return this.cpf;
      }

      public getName(): string {
        return this.name;
      }
      
      public calculateBill(): number {
        return this.consumedEnergy * 0.75;
      }
}