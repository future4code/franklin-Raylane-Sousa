//EXERCICIO05
export function checaRenovacaoRG(anoAtual: number, anoNascimento: number, anoEmissao: number) {
 
    const idade: number = anoAtual - anoNascimento
    const tempoCarteira: number = anoAtual - anoEmissao

    const cond1: boolean = idade <= 20 && tempoCarteira >= 5
    const cond2: boolean = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3: boolean = idade > 50 && tempoCarteira >= 15

    console.log(cond1 || cond2 || cond3)
     
    if (cond1 || cond2 || cond3 === true) {
      console.log('Sua CNH precisa ser renovada!')
    } else {
      console.log('Sua CNH NÃO precisa ser renovada')
    } 

 }
 
 console.log(checaRenovacaoRG(2022, 1994, 2018))
