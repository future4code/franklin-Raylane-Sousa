export enum userRole {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export type user = {
   id: string
   email: string
   password: string
   name: string
   nickname: string
   role: userRole
}
export interface AuthenticatorData {
    id: string, 
    role: userRole
}