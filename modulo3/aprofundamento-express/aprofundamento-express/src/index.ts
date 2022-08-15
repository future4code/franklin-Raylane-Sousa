import express, { Response, Request, response } from "express";
import cors from "cors";
import { tasks } from './database/db'

const app = express();

app.use(express.json());
app.use(cors());

//EXERCÍCIO 02
type myTask = {id: number, idUser: number, title: string, status:string}

//EXERCICIO 01
app.get("/ping", (req:Request, res:Response) => {
    res.status(200).send("Pong!")
})

//RETORNAR ARRAY TAREFAS
app.get('/tasks', (req:Request, res:Response) =>{
    res.status(200).send(tasks)
})

//EXERCÍCIO 04 <--Buscar tarefa por status-->
app.get('/task/:status', (req:Request, res:Response) =>{
    let statusW: any = (req.params.status)
    const statusFilter = tasks.filter((ts: any) => ts.status === statusW)

    if (statusW === "concluido") {
        res.status(200).send({statusFilter})
    } else if (statusW === "em andamento") {
        res.status(200).send({statusFilter})
    }  else {
        res.status(400).send("STATUS NÃO ENCONTRADO!")
    }
})

//EXERCICIO 05 <--Criar nova tarefa-->
app.post('/createtask', (req:Request, res:Response) =>{
    const {id, idUser, title, status}:myTask = req.body
    
    const newTask:myTask = {
        id: id,
        idUser: idUser,
        title: title, 
        status: status
    }

    tasks.push(newTask)
    res.status(200).send(tasks)
})
/* 
//EXERCICIO 06  <--EM ANDAMENTO, AINDA NÃO ESTÁ FUNCIONANDO--> EDITAR ID
 app.put('/task/edit', (req:Request, res:Response) =>{
    const idTask = Number(req.params.id)
    const newStatus = req.body
    const editTask = tasks.filter((ts: any) => {ts.id === idTask})
    tasks.map((ts: any) => ts = {status: newStatus})
  

    res.status(200).send(editTask)
})
*/
/* //EXERCICIO 07 <--EM ANDAMENTO NÃO ESTÁ FUNCIONANDO ALGO--> DELETAR by ID
app.delete('task/:id', (req:Request, res:Response) => {
    const id = Number(req.params.id)
    for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id === id) {
              tasks.splice(i, 1)
             }
         }
   
    res.status(200).send(tasks)
})  */

//EXERCIO 08 <--Buscar tarefa por id Usuário-->
app.get('/searchtask/:iduser', (req:Request, res:Response) =>{
    let userId: any = (req.params.iduser)
    const userTaskFilter = tasks.filter((ts: any) => ts.idUser === userId)

    res.status(200).send({userTaskFilter})
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

