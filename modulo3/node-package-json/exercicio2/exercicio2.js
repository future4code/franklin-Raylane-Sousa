op = process.argv[2]
n1 = +process.argv[3]
n2 = +process.argv[4]

switch(op){
	case "soma":
		op = (n1 + n2)
        console.log("\033[34m A soma dos valores é:", op)
		break;
	case "subt":
		op = (n1 - n2)
        console.log("\033[31m A subtração dos valores é:", op)
		break;
    case "mult":
        op = (n1 * n2)
        console.log("\033[0;32mA multiplicação dos valores é:", op)
        break;
    case "div":
        op = (n1 / n2)
        console.log("\033[1;35m A divisão dos valores é:", op)
        break;
    default: 
    console.log("\033[45;1;37mOpção inválida!!")
}

/* 
if (op === "soma ") {
    op = (n1 + n2)
    console.log("A soma dos valores é:", op)
} else if ( op === "subt") {
    op = (n1 - n2)
    console.log("A subtração dos valores é:", op)
} else if (op === "mult"){
    op = (n1 * n2)
    console.log("A multiplicação dos valores é:", op)
} else if (op === "div"){
    op = (n1 / n2)
    console.log("A divisão dos valores é:", op)
} else {
    console.log("Opção inválida")
} */