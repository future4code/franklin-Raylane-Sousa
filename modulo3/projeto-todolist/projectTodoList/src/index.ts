import app from "./app"
import createTaskReq from "./endpoints/tasks/createTask"
import getAllUsersReq from "./endpoints/users/getAllUsers"
import getMessageReq from "./endpoints/getMessageReq"
import getTaskByIdReq from "./endpoints/tasks/getTaskById"
import getTaskJoinUserReq from "./endpoints/tasks/getTaskJoinUser"
import postRespTaskReq from "./endpoints/tasks/postRespTask"
import createUserReq from "./endpoints/users/createUserReq"
import queryUserByTermReq from "./endpoints/users/queryUserByTermReq"
import getUserByIdReq from "./endpoints/users/getUserById"
import updateUserReq from "./endpoints/users/updateUserById"


//ENDPOINTS API
app.get("/message", getMessageReq ) //
app.post("/user", createUserReq) //CRIAR UM USUÁRIO
app.get("/user", queryUserByTermReq) //BUSCAR USUARIO PELO TERMO CONTIDO EM NICKNAME OU EMAIL
app.get("/user/all", getAllUsersReq) //PEGAR TODOS OS USUARIOS
app.get("/user/:id", getUserByIdReq) //PEGAR UM USUÁRIO PELO ID 
app.put("/user/edit/:id", updateUserReq) //EDITAR UM USUÁRIO
app.get("/task", getTaskJoinUserReq ) // PEGAR TAREFAS CRIADAS POR UM USUARIO
app.post("/task", createTaskReq ) //CRIAR TAREFA
app.get("/task/:id", getTaskByIdReq) //PEGAR TAREFA PELO ID 
app.post("/task/responsible", postRespTaskReq) //ATUALIZAR RESPONSAVEL PELA TAREFA



