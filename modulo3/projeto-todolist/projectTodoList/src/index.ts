import app from "./app"
import createTaskReq from "./endpoints/createTask"
import createUserReq from "./endpoints/createUserReq"
import getAllUsersReq from "./endpoints/getAllUsers"
import getMessageReq from "./endpoints/getMessageReq"
import getTaskByIdReq from "./endpoints/getTaskById"
import getTaskJoinUserReq from "./endpoints/getTaskJoinUser"
import getUserByIdReq from "./endpoints/getUserById"
import queryUserByTermReq from "./endpoints/queryUserByTermReq"
import updateUserReq from "./endpoints/updateUserById"


//ENDPOINTS API
app.get("/message", getMessageReq ) //
app.post("/user", createUserReq) //CRIAR UM USUÁRIO
app.get("/user", queryUserByTermReq) //BUSCAR USUARIO PELO NOME --EM CONSTRUÇÃO--
app.get("/user/all", getAllUsersReq) //PEGAR TODOS OS USUARIOS
app.get("/user/:id", getUserByIdReq) //PEGAR UM USUÁRIO PELO ID 
app.put("/user/edit/:id", updateUserReq) //EDITAR UM USUÁRIO
app.get("/taskjoin/:id", getTaskJoinUserReq ) // --EM CONSTRUÇÃO--
app.post("/task", createTaskReq ) //CRIAR TAREFA
app.get("/task/:id", getTaskByIdReq) //PEGAR TAREFA PELO ID 



