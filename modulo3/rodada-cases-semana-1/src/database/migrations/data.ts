import { ProductDB, TagDB } from "../../models/Product"
import { IUserDB, USER_ROLES } from "../../models/User"

export const users: IUserDB[] = [
    {
        id: "bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b",
        name: "Jane",
        email: "jane@email.com",
        password: "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC", // bananinha
        role: USER_ROLES.ADMIN
    },
    {
        id: "f03017bb-2c08-4cdc-bb63-7fbd7cebe01f",
        name: "Fulano",
        email: "fulano@gmail.com",
        password: "$2a$12$PULtVNlAll87D6E8pR/0HO9vbzVDPaUMA89rc5cNmYoAAepbwmkcO", // qwerty00
        role: USER_ROLES.NORMAL
    }
]

export const tag: TagDB[] = [
    {
        id: "01",
        name: "Balada"
    },
    {
        id: "02",
        name: "Neutro"
    },
    {
        id: "03",
        name: "Delicado"
    },
    {
        id: "04",
        name: "Festa"
    },
    {
        id: "05",
        name: "Casual"
    }
]

export const products: ProductDB[] = [
    {
        id: "011",
        name: "VESTIDO JEANS",
        tag_id: "05"
    },
    {
        id: "012",
        name: "VESTIDO FEMININO CANELADO",
        tag_id: "01"
    },
    {
        id: "013",
        name: "MOLETON ATLANTA",
        tag_id: "02"
    },
    {
        id: "014",
        name: "JAQUETA JAKE BUG",
        tag_id: "01"
    },
]