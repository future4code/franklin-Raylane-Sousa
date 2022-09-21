
import { performPurchase } from "../src/functions/performPurchase"
import { User } from "../src/models/user"

describe("Testing the 'permormPurchase' function", () => {
    test("Testing with the balance GREATER than the purchase amount", () => {
        const user: User = {
            name: "Jane Doe",
            balance: 500
        }
    
        const result = performPurchase(user, 100)
        
        expect(result).toEqual({
            name: "Jane Doe",
            balance: 400
        })
    })

    test("Testing with the balance EQUAL to the purchase amount", () => {
        const user: User = {
            name: "John Doe",
            balance: 350
        }

        const result = performPurchase(user, 350)

        expect(result).toEqual({
            name: "John Doe",
            balance: 0
        })

    })

    test("Testing with the balance LESS THAN to the purchase amount", () => {
        const user: User = {
            name: "Jake",
            balance: 1000
        }

        const result = performPurchase(user, 1500)

        expect(result).not.toBeDefined()

    })

  
})
