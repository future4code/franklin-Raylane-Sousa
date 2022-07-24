const Add = (valor1, valor2) => {
    return valor1 + valor2
}

//preparação 
const VerificaAdd = () => {
    const valor1 = 1
    const valor2 = 2

    const result = Add(valor1, valor2)

//verificação 
    if (result === 3) {
        console.log("Deu bom!")
    } else {
        console.log("Deu Ruim!")
    }

}

//execução
VerificaAdd()