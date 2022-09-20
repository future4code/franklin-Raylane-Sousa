import { performPurchase } from "../src"
import { User } from "../src/models/user"

performPurchase

describe("Testando a função permormPurchase", () => {
    test("Testando se o saldo X será Y após determinada compra", () => {
        const user: User = {
            name: "Astrodev",
            balance: 100
        }
    
        const result = performPurchase(user, 40)
        
        expect(result).toEqual({
            name: "Astrodev",
            balance: 60
        })
    })
  
})
