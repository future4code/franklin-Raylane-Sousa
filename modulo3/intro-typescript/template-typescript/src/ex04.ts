//EXERCICIO04
export function comparaDoisNumeros(num1: number, num2:number){
    let maiorNumero: number;
    let menorNumero: number;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca: number = maiorNumero - menorNumero;
  
    return console.log(`A diferença entre os valores ${num1} e ${num2} é: `, diferenca) 
  }
console.log(comparaDoisNumeros(3, 7))