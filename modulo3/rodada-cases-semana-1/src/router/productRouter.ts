import { Router } from 'express'
import { ProductBusiness } from '../business/ProductBusiness'
import { ProductController } from '../controller/ProductController'
import { ProductsDatabase } from '../database/ProductsDatabase'
import { Authenticator } from '../services/Authenticator'

export const productRouter = Router()

const productController = new ProductController(
    new ProductBusiness(
        new ProductsDatabase(),
        new Authenticator()
    )
)

productRouter.get("/", productController.getAllProducts)
productRouter.get("/tags", productController.getAllTags)
productRouter.get("/search", productController.getProductsByTag)
productRouter.get("/:id", productController.getProductById)
productRouter.post("/create", productController.createProduct)