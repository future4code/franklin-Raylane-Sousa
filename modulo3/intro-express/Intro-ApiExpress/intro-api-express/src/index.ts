import express, { Response, Request } from "express";
import cors from "cors";
import { users } from './database/users'
import { posts } from './database/posts'

const app = express();

app.use(express.json());
app.use(cors());

//EXERCICIO 01
app.get("/", (req, res) => {
    res.send("Olá, seja bem vindo, essa é a minha primeira API Express!")
})

//EXERCICIO04 [RETORNA TODOS OS USUARIOS]
app.get('/allusers', (request: Request, response: Response) => {
    const allUsers: any = users   //database
    response.status(200).send(allUsers)
})

//[RETORNA USUÁRIO PELO ID]
app.post('/users/:id', (request: Request, response: Response) => {
    const idUser = Number(request.params.id)
    const allUsers: any = users

    const FindUser = allUsers.find((user: any) => {
        return user.id === idUser
    })
    response.status(200).send({ message: `${FindUser?.name} foi encontradx na base de dados` })
})

//EXERCICIO07 [RETORNA TODOS OS POSTS] 
app.get('/allposts', (request: Request, response: Response) => {
    const allposts: any = posts   //database
    response.status(200).send(allposts)
})


//EXERCICIO 08 [Retorna o posts de um usuário pelo ID]
app.post('/users/:id/post', (request: Request, response: Response) => {
    const idUser = Number(request.params.id)
    const allPosts: any = posts

    const FindPost = allPosts.filter((post: any) => {   //filtra o array de posts
        return post.userId === idUser
    })
    response.status(200).send({ FindPost })
})

/* //EXERCICIO EM ANDAMENTO 09 [Deletar Um post] 
app.delete("/post", (request: Request, response: Response) => {
    const id = request.query.id

    posts.forEach((post: any) => {
        posts.map((post: any) => {
            if (post.id === id) {
                return {}
            }
            return posts
        });
    })

    response.status(200).send(posts)
}) */

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

