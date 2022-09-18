import {Router} from "express"
import { UserBusiness } from "../business/UserBusiness"
import { UserController } from "../controller/UserController"
import { UserCookDatabase } from "../database/UserCookDatabase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export const userRouter = Router()

const userController = new UserController(
    new UserBusiness(
        new UserCookDatabase(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    )
)

userRouter.get("/", userController.getUsers)
userRouter.get("/profile", userController.getYourProfile)
userRouter.get("/:id", userController.getUserByID)
userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)
userRouter.delete("/:id", userController.deleteUser)
userRouter.put("/:id", userController.editUser)