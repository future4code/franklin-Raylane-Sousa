//Podemos acessar os parametrôs personalizando o scripts do arquivo package.json
//Exemplo -->  "start":"node index.js raylane 27"
//É possivel criar multiplos scripts para parâmetros distintos.

nome = process.argv[2]
idade = +process.argv[3] 
idade_futuro = idade + 7
console.log('\033[0;34m Olá', nome,'! Você tem', idade, '\033[0;34manos. \033[1;35m Em sete anos você terá:', idade_futuro)


//converter para Number(process.argv[3])