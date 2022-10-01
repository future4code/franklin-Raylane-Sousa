import { verifyAge } from "../src/functions/verifyAge";
import { Casino, LOCATION, NACIONALITY, UserCasino } from "../src/models/user";

describe("Ex-05", () =>{

test("Brazilian user who can enter an casino in Brazil. Check the allowed array size of the BR property is smaller than 2 and larger than 0. ", () => {
    const userBR: UserCasino = {
        name: "Maria",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
        name: "Noites Start",
        location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [userBR]);

    expect(result.brazilians.allowedUsers.length).toBeLessThan(2);
    expect(result.brazilians.allowedUsers.length).toBeGreaterThan(0);
    
});

test("American user who can enter an casino in Brazil. Check the unallowed array size of the EUA property is smaller than 2 and larger than 0. ", () => {
    const userEUA: UserCasino = {
        name: "Marry",
        age: 19,
        nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
        name: "Noites Start",
        location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [userEUA]);
    
    expect(result.americans.unallowedUsers.length).toEqual(0);
    
});


test("Verify arrays toContain", () => {
    const brazilian: UserCasino = {
      name: "Janete",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const american: UserCasino = {
      name: "Jane",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ]);

    expect(result.brazilians.unallowedUsers).toContain("Janete");
    expect(result.americans.unallowedUsers).toContain("Jane");
  });


  test("Verify Arrays", () => {
    const brazilian: UserCasino = {
      name: "Lucas",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const american: UserCasino = {
      name: "Luke",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ]);
    expect(result.brazilians.unallowedUsers.length).toBeGreaterThan(1);
    expect(result.americans.unallowedUsers.length).toBeLessThan(1);
    expect(result.americans.allowedUsers.length).toBe(2);
  });

})