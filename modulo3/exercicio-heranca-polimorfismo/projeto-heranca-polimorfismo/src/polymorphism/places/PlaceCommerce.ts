import { AbstractPlace } from "../models/AbstractPlace";

export class PlaceCommerce extends AbstractPlace {
    constructor(
        protected floorsQuantity: number, //andares do local
        cep: string
    ) {
        super(cep)  //herda o cep da class AbstractPlace
    }

    public getterFloorsQ (): number {
        return this.floorsQuantity
    }
}