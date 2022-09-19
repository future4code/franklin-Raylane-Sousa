import { AbstractPlace } from "../models/AbstractPlace";

export class PlaceResidence extends AbstractPlace {
    constructor(
      protected residentsQuantity: number, // qtde de moradores
      cep: string
    ) {
      super(cep);
    }

    public getterResidentQ(): number {
        return this.residentsQuantity
    }
    
  }