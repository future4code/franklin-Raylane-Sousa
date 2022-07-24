import {primeiraLetraMaiuscula, PrimeiraLetraM} from './ex5'

describe("Checa primeiraLetraMaiuscula", () => {
  test("retorna primeira letra maiúscula", () => {
    const string = primeiraLetraMaiuscula("primeira frase");
    expect(string).toEqual("Primeira frase");   //apenas primeira letra da frase
  });

}); 