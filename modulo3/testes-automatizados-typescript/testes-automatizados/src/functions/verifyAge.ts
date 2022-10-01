import { Casino, LOCATION, NACIONALITY, ResultNation, UserCasino } from "../models/user"

export const verifyAge = (casino: Casino, users: UserCasino[]): ResultNation | any => {
    const allowedUsers: UserCasino[] = []
    const unallowedUsers: UserCasino[] = []

    for (const user of users) {
        if (casino.location === LOCATION.EUA) {
            if (user.age >= 21) {
                allowedUsers.push(user)
            } else {
                unallowedUsers.push(user)
            }
        } else if (casino.location === LOCATION.BRAZIL) {
            if (user.age >= 18) {
                allowedUsers.push(user)
            } else {
                unallowedUsers.push(user)
            }
            break;
        } 
    }
    return {
        brazilians: {
            allowedUsers: allowedUsers
            .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
            .map((u) => u.name),

            unallowedUsers: unallowedUsers
            .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
            .map((u) => u.name)
        },

        americans: {
            allowedUsers: allowedUsers
            .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
            .map((u) => u.name),

            unallowedUsers: unallowedUsers
            .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
            .map((u) => u.name),
        }
    }
}