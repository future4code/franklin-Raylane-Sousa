import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { userRouter } from './router/userRouter'
import { productRouter } from './router/productRouter'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.use("/products", productRouter)
app.use("/users", userRouter)


app.listen(process.env.PORT || 3003, () => {
    console.log(`Server running on port ${process.env.PORT || 3003}`)
})
