import { crescenteArray, decrescenteArray } from "./ex4";

describe("Checa ordem de valores no array", () => {
    test("retorna array crescente", () => {
        const array = crescenteArray([4, 5, 3])

        expect(array).toEqual([3, 4, 5])
    }); 

    test("retorna array decrescente", () => {
        const array = decrescenteArray([4, 5, 3])

        expect(array).toEqual([5, 4, 3])
    });

})