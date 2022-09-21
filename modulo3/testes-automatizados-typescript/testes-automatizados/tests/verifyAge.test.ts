import { verifyAge } from "../src/functions/verifyAge"
import { Casino, LOCATION, NACIONALITY, UserCasino } from "../src/models/user"

describe("Testing the 'verifyAge' function", () => {
    test("Test that receives a Brazilian user who can enter an establishment in Brazil", () => {
        const userBR: UserCasino = {
            name: "Gui",
            age: 25,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: "Noites sem grana",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [userBR])
        expect(result.brazilians.allowedUsers).toEqual(["Gui"])

    })

    test("Test that receives a American user who can enter an establishment in Brazil", () => {
        const userBR: UserCasino = {
            name: "Troyer",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Noites sem grana",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [userBR])
        expect(result.americans.allowedUsers).toEqual(["Troyer"])


    })

    test("Receives two users with equal ages ", () => {  //verify 
        const userBR: UserCasino = {
            name: "Maria",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN,
        };

        const userEUA: UserCasino = {
            name: "Marry",
            age: 19,
            nacionality: NACIONALITY.AMERICAN,
        };

        const casino: Casino = {
            name: "Noites sem grana",
            location: LOCATION.EUA,
        };

        const result = verifyAge(casino, [
            userBR,
            userBR,
            userEUA,
            userEUA,
        ]);
        expect(result.brazilians.unallowedUsers).toEqual(["Maria", "Maria"]);
        expect(result.americans.unallowedUsers).toEqual([
            "Marry",
            "Marry",
        ]);
    });

    test("Receives two users with different age ", () => {
        const userBR: UserCasino = {
            name: "Maria",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN,
        };

        const userEUA: UserCasino = {
            name: "Marry",
            age: 21,
            nacionality: NACIONALITY.AMERICAN,
        };

        const casino: Casino = {
            name: "Noites Start",
            location: LOCATION.EUA,
        };

        const result = verifyAge(casino, [
            userBR,
            userBR,
            userEUA,
            userEUA
        ]);
        expect(result.brazilians.unallowedUsers).toEqual(["Maria", "Maria"]);
        expect(result.americans.allowedUsers).toEqual(["Marry", "Marry",]);
    });
})
