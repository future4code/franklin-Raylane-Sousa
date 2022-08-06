//EXERCICIO03
export function checaAnoBissexto(ano: number): boolean {
    const cond1 = ano % 400 === 0
    const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)

    if ( cond1 || cond2 === true ) {
        console.log("O ano é bissexto!")
    } else (
        console.log("O ano não é bissexto!")
    )
    return cond1 || cond2
 }

 console.log(checaAnoBissexto(2022))