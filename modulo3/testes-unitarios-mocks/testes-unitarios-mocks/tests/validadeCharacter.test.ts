import { validateCharacter } from "../src/functions/validateCharacter";

describe("Tests 'validadeCharacter' function", () => {

    test("Should return false for empty name", () => {
        const newCharacter = validateCharacter({
            name: "",
            life: 1500,
            strength: 300,
            defense: 500,
        });

        expect(newCharacter).toBe(false);
    });

    test("Should return false for life 0", () => {
        const newCharacter = validateCharacter({
            name: "Kate",
            life: 0,
            strength: 300,
            defense: 500,
        });

        expect(newCharacter).toBe(false);
    });

    test("Should return false for strength 0", () => {
        const newCharacter = validateCharacter({
            name: "Josh",
            life: 1000,
            strength: 0,
            defense: 500,
        });

        expect(newCharacter).toBe(false);
    });

    test("Should return false for defense 0", () => {
        const newCharacter = validateCharacter({
            name: "Mark",
            life: 1000,
            strength: 500,
            defense: 0,
        });

        expect(newCharacter).toBe(false);
    });

    test("Should return false for life or strength 0", () => {
        const newCharacter = validateCharacter({
            name: "Dalila",
            life: 0,
            strength: 500,
            defense: 200,
        });

        expect(newCharacter).toBe(false);
    });

    test("Should return true for valid information", () => {
        const newCharacter = validateCharacter({
            name: "Sam",
            life: 1500,
            strength: 500,
            defense: 200,
        });

        expect(newCharacter).toBe(true);
    });

})