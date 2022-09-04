import { AbstractPlace } from "../models/AbstractPlace"

export class PlaceIndustry extends AbstractPlace {
    constructor (protected machinesQuantity: number,
    cep: string
     ) {
    super(cep)
     }

     public getterMachinesQ (): number {
        return this.machinesQuantity
     }
}