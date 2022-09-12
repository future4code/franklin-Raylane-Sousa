//VARIAVEIS TIPADAS
export type clientExtract = {
    value: number,
    date: string,
    description: string
}

export type clientAccount = {
    name: string,
    cpf: string,
    birthDate: string,
    valueA: number,
    extract: Array<clientExtract>
}


