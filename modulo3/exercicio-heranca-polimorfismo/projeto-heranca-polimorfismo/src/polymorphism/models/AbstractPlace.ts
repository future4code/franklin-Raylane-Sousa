export abstract class AbstractPlace {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }