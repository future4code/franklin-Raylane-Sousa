import express, { Response, Request, response } from "express";
import cors from "cors";
import { labeAccountClient } from './database/db'
import { clientAccount, clientExtract } from "./types";

const app = express();

app.use(express.json());
app.use(cors());


//RETORNA TODAS AS INFORMAÇÕES DAS CONTAS
app.get("/clients", (req:Request, res:Response) => {
    res.status(200).send(labeAccountClient)
})

//RETORNA TODOS OS EXTRATOS
app.get('/extract/', (req:Request, res:Response) => { 
const extract = labeAccountClient.map((account: any) => {
    return account.extract
}).flat(1);

res.status(200).send(extract);
})

//CRIA CONTA || APENAS MAIOR DE 18 ANOS E COM CPF NÃO CADASTRADO
app.post('/createaccount', (req: Request, res: Response) =>{
    const { name, cpf, birthDate} = req.body
    const extract: clientExtract[] = []
    const newLabeAccount: clientAccount = {name, cpf, birthDate, valueA: 0, extract}
    
    const dateBirth: Date = new Date(newLabeAccount.birthDate)
    const dateToday: Date = new Date();

    const olderAge: any = dateToday.getFullYear() - dateBirth.getFullYear()

    labeAccountClient.find((client: any) => {if (client.cpf === newLabeAccount.cpf) {
        res.status(400).send({ message: "O cliente ja possui cadastro!" })
    }})

    if (olderAge >= 18) {
        labeAccountClient.push(newLabeAccount) 
    } else {
        res.status(401).send({ message: "O cliente precisa ter mais de 18 anos de idade para abrir a conta!" })
    }

    res.status(200).send(labeAccountClient)
}) 

//VERIFICA SALDO PASSANDO NOME E CPF
app.get("/value", (req: Request, res: Response) => {
    const { name, cpf } = req.body;
    if (name && cpf) {
        const takeValueA = labeAccountClient.find((client: any) => client.name === name && client.cpf === cpf);
        if (takeValueA) {
            res.status(200).send({ Cliente: takeValueA.name, Saldo: takeValueA.valueA });
        } else {
            res.status(404).send({ message: "Registro não encontrado, verifique se as informações estão corretas!" })
        }
    } else {
        res.status(400).send({ message: "Informe o nome e o cpf!"});
    }
});

//ADICIONAR SALDO PASSANDO NOME, CPF e VALOR
app.post('/value/', (req: Request, res: Response) =>{
    const {name, cpf, valueA} = req.body
    const postValueA = labeAccountClient.filter((client: clientAccount) => {
            return client.name === name && client.cpf === cpf
     });

    if (postValueA) {
        postValueA[0].valueA += Number(valueA)
        res.status(202).send(labeAccountClient);
    } else{
        res.status(401).send({"message": "CPF não encontrado, verifique as informações!"})
    }     
    
}) 


//Verificando funcionamento do servidor 
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

