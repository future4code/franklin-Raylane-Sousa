import { performAttack } from "../src/functions/performAttack";
import { Character } from "../src/models/character";

describe("Tests 'performAttack' function", () => {
    test("Should perform attack", () => {
        const validatorMock = jest.fn(() => {
          return true;
        });
    
        const attacker: Character = {
          name: "Scorpion",
          life: 1500,
          defense: 200,
          strength: 850,
        };
    
        const defender: Character = {
          name: "Kitana",
          life: 555,
          defense: 650,
          strength: 800,
        };
    
        performAttack(attacker, defender, validatorMock as any);
    
        expect(defender.life).toEqual(355);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2);
      });

      test("Should return invalid character error", () => {
        expect.assertions(4);
        const validatorMock = jest.fn(() => {
          return false;
        });
    
        const attacker: Character = {
          name: "Rachel",
          life: 0,
          defense: 200,
          strength: 600,
        };
    
        const defender: Character = {
          name: "Ciclope",
          life: 1500,
          defense: 400,
          strength: 800,
        };
    
        try {
          performAttack(attacker, defender, validatorMock as any);
        } catch (err: any) {
          expect(err.message).toBe("Invalid character");
          expect(validatorMock).toHaveBeenCalled();
          expect(validatorMock).toHaveBeenCalledTimes(1);
          expect(validatorMock).toHaveReturnedTimes(1);
        }
      });

})