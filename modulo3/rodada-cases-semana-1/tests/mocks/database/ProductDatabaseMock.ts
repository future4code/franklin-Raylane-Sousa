import { BaseDatabase } from "../../../src/database/BaseDatabase"
import { Product, ProductDB, ProductsInputDBDTO } from "../../../src/models/Product"

export class ProductsDatabaseMock extends BaseDatabase {
    public static TABLE_TAGS = "AmaroTags"
    public static TABLE_PRODUCTS = "AmaroProducts"

  
    public createProduct = async (pr: Product) => {
       
    }

    public getAllProducts = async (input: ProductsInputDBDTO): Promise<any> => {
        
    
    }

    public findById = async (id: string):Promise<ProductDB | undefined>  => {
        switch(id) {
            case "011":
            return {
                id: "011",
                name: "VESTIDO JEANS",
                tag_id: "05"
            }
        default: 
        return undefined
        }
    }

    public findByName = async (name: string):Promise<ProductDB | undefined> => {
        switch(name) {
            case "VESTIDO JEANS":
            return {
                id: "011",
                name: "VESTIDO JEANS",
                tag_id: "05"
            }
        default: 
        return undefined
        }
    }

    public getProductsNameTag = async (tag: string) => {

        switch(tag) {
            case "Balada":
            return [  
            {
                Id: "012",
                Product: "VESTIDO FEMININO CANELADO",
                Tag: "Balada"
            },
            {
                Id: "014",
                Procuct: "JAQUETA JAKE BUG",
                Tag: "Balada"
            }
        ]
        default: 
        return undefined
        }
       
    }

    public deleteProduct = async (id: string) => {
      
    }

    public editProduct = async (pr: Product) => {
      
    }

    public getAllTags = async (input: ProductsInputDBDTO) => {
    
    }
}