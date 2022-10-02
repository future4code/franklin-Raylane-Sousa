import { Product, ProductDB, ProductsInputDBDTO } from "../models/Product"
import { BaseDatabase } from "./BaseDatabase"

export class ProductsDatabase extends BaseDatabase {
    public static TABLE_TAGS = "AmaroTags"
    public static TABLE_PRODUCTS = "AmaroProducts"

  
    public createProduct = async (pr: Product) => {
        const newProductDB: ProductDB = {
            id: pr.getId(),
            name: pr.getName(),
            tag_id: pr.getTag()
        }

        await BaseDatabase
            .connection(ProductsDatabase.TABLE_PRODUCTS)
            .insert(newProductDB)
    }

    public getAllProducts = async (input: ProductsInputDBDTO) => {
        const search = input.search
        const order = input.order
        const sort = input.sort
        const limit = input.limit
        const offset = input.offset

        const productDB: ProductDB[] = await BaseDatabase
            .connection(ProductsDatabase.TABLE_PRODUCTS)
            .select()
            .where("name", "LIKE", `%${search}%`)
            .orderBy("id", sort)
            .limit(limit)
            .offset(offset)
        
        return productDB
    }

    public findById = async (id: string) => {
        const productDB: ProductDB[] = await BaseDatabase
            .connection(ProductsDatabase.TABLE_PRODUCTS)
            .select()
            .where({ id })

        return productDB[0]
    }

    public findByName = async (name: string) => {
        const productsDB: ProductDB[] = await BaseDatabase
            .connection(ProductsDatabase.TABLE_PRODUCTS)
            .select()
            .where({ name })

        return productsDB[0]
    }

    public getProductsNameTag = async (tag: string) => {
        const productsDB: any[] = await BaseDatabase
            .connection.raw(`SELECT apr.id, apr.name as Produto, atag.name as Tag FROM AmaroProducts AS apr LEFT JOIN AmaroTags AS atag ON apr.tag_id = atag.id 
            WHERE atag.name = '${tag}'`)
        return productsDB[0]
    }

    public deleteProduct = async (id: string) => {
        await BaseDatabase
            .connection(ProductsDatabase.TABLE_PRODUCTS)
            .delete()
            .where({ id })
    }

    public editProduct = async (pr: Product) => {
        const productDB: ProductDB = {
            id: pr.getId(),
            name: pr.getName(),
            tag_id: pr.getTag()
        }
        
        await BaseDatabase
            .connection(ProductsDatabase.TABLE_PRODUCTS)
            .update(productDB)
            .where({ id: productDB.id })
    }

    public getAllTags = async (input: ProductsInputDBDTO) => {
        const search = input.search
        const order = input.order
        const sort = input.sort
        const limit = input.limit
        const offset = input.offset

        const productDB: ProductDB[] = await BaseDatabase
            .connection(ProductsDatabase.TABLE_TAGS)
            .select()
            .where("name", "LIKE", `%${search}%`)
            .orderBy("id", sort)
            .limit(limit)
            .offset(offset)
        
        return productDB
    }
}