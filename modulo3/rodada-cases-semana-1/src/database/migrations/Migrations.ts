import { BaseDatabase } from "../BaseDatabase"
import { ProductsDatabase } from "../ProductsDatabase"
import { UserDatabase } from "../UserDatabase"
import { products, tag, users } from "./data"

class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating table tags...")
            await this.insertData()
            console.log("Populating table products...")
            await this.insertDataProduct()
            console.log("Populating table users...")
            await this.insertUsers()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error: any) {
            console.log("Error in migrations...")
            console.log(error.message)
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${UserDatabase.TABLE_USERS};
        DROP TABLE IF EXISTS ${ProductsDatabase.TABLE_PRODUCTS};
        DROP TABLE IF EXISTS ${ProductsDatabase.TABLE_TAGS};
      
          
        CREATE TABLE IF NOT EXISTS ${UserDatabase.TABLE_USERS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL" NOT NULL
        );

        CREATE TABLE IF NOT EXISTS  ${ProductsDatabase.TABLE_TAGS} (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${ProductsDatabase.TABLE_PRODUCTS} (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            tag_id VARCHAR(255),
            FOREIGN KEY (tag_id) REFERENCES AmaroTags(id)
        );
        
        `)
    }

    insertData = async () => {
        await BaseDatabase
            .connection(ProductsDatabase.TABLE_TAGS)
            .insert(tag)
    }

    insertDataProduct = async () => {
        await BaseDatabase
            .connection(ProductsDatabase.TABLE_PRODUCTS)
            .insert(products)
    }

    insertUsers = async () => {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(users)
    }
}

const migrations = new Migrations()
migrations.execute()