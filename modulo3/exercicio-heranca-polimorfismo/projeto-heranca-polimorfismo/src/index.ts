import { CustomerLbn } from "./inheritance/CustomerLbn"
import { EmployeeLbn } from "./inheritance/EmployeeLbn"
import { SellerLbn } from "./inheritance/SellerLbn"
import { UserLbn } from "./inheritance/UserLbn"
import { PlaceCommerce } from "./polymorphism/places/PlaceCommerce"
import { ResidentialClient } from "./polymorphism/clients/ResidentialClient"
import { InterfaceClientLbn } from "./polymorphism/models/InterfaceClientLbn"
import { PlaceResidence } from "./polymorphism/places/PlaceResidence"
import { PlaceIndustry } from "./polymorphism/places/PlaceIndustry"
import { CommercialClient } from "./polymorphism/clients/CommercialClient"
import { IndustryClient } from "./polymorphism/clients/IndustryClient"
import { ClientManager } from "./polymorphism/Manager"


console.log("Hello, world!")
//01
const user01 = new UserLbn('01','ray@email.com','Raylane Nara','123@3306')
console.log(user01)
//02
const customer01 = new CustomerLbn('01','ray@email.com', 'Raylane Nara','123@3306', '123456789', 0)
//03
console.log(customer01)
//04
console.log(customer01.interoduceYourself())
const admDate = new Date('2022/05/02')
const employee01 = new EmployeeLbn('001', 'user@email', 'Jane', '1232', 1200, admDate)
console.log(employee01)
console.log(`Sr(a) ${employee01.getName()} calculo do seu Salário + Bonus é: ${employee01.calcTotalSalary()}`)

const seller01 = new SellerLbn('001', 'user@email', 'Doe', '1222', 10 )
console.log("Comissão do usuário", seller01.comission().toFixed(2))

const manager = new ClientManager()
console.log(manager.getClientsQuantity())

//POLIMORFISMO 

//objeto tipo InterfaceClientLbn
const ClientLbn01: InterfaceClientLbn = {
    name: "Jake",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill: () => {
        return 2
    }
}
console.log(ClientLbn01, ClientLbn01.calculateBill())

//03
const home01 = new PlaceResidence(2,'6810-000')
const commerce01 = new PlaceCommerce(3,'6810-001')
const industry01 = new PlaceIndustry(5,'6810-002')

console.log(home01.getCep())
console.log(home01.getterResidentQ())

console.log(commerce01.getCep())
console.log(commerce01.getterFloorsQ())
console.log(industry01.getCep())
console.log(industry01.getterMachinesQ())

//04

const ResClient001 = new ResidentialClient('Nara',12,120,'321654',2,'68180-000')
const CommercialClient001 = new CommercialClient('Hayley',13,1200,'321654',3,'68180-001')
const IndustryClient001 = new IndustryClient('Avril',14,15000,'321654',5,'68180-002')
console.log(ResClient001)
console.log(CommercialClient001)
console.log(IndustryClient001)

console.log(`Sr(a) ${ResClient001.getName()} valor de sua conta de energia residencial é R$ ${ResClient001.calculateBill().toFixed(2)}`)
console.log(`Sr(a) ${CommercialClient001.getName()} valor de sua conta de energia comercial é R$ ${CommercialClient001.calculateBill().toFixed(2)}`)
console.log(`Sr(a) ${IndustryClient001.getName()} valor de sua conta de energia industrial é R$ ${IndustryClient001.calculateBill().toFixed(2)}`)
