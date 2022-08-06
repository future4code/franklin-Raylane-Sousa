//EXERCICIO06

export function PrintValues( valueA: number, valueB: number) {
    const soma: number = valueA + valueB
    const subt: number = valueA - valueB
    const mult: number = valueA * valueB
    const divi: number = valueA / valueB

    let maiorValor: number 

    if(valueA > valueB) {
        maiorValor = valueA
    } else {
        maiorValor = valueB
    }
    
    return console.log("Soma:",soma,"\nSubtração:", subt,"\nMultiplicação:", mult,"\nDivisão:", divi.toFixed(2) ,"\nMaior valor:", maiorValor)
}

PrintValues(10, 6)