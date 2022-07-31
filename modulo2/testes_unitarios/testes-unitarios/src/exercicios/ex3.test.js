import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {

     test("verifica se o array equivale ao valor", () => {
        const array = [1, 2, 3, 4]

        expect(array).toEqual([1, 2, 3, 4])

      });

      test("Verifica duplicidade do array", () => {
        const array = checaItensDuplicados(["a", "a", "b", "c"])

        expect(array).toEqual(true)
      }); 

      test("Verfica se itens do array sao repeditos true", () => {
        const array = checaItensDuplicados([1, 2, 3, 2, 4])

        expect(array).toEqual(true)
      }); 

      test("Verfica se itens do array sao repeditos e espera false", () => {
        const array = checaItensDuplicados([1, 2, 3])

        expect(array).toEqual(false)
      }); 

      test("Verfica se itens do array sao repeditos e espera false", () => {
        const array = checaItensDuplicados([])

        expect(array).toEqual(false)
      }); 
});
