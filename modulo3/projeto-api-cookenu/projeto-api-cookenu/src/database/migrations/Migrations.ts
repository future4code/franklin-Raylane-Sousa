import { BaseDatabase } from "../BaseDatabase"
import { RecipeDatabase } from "../RecipeDataBase"
import { UserCookDatabase } from "../UserCookDatabase"
import { users } from "./data"

class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating table users...")
            await this.insertUsers()
            console.log("Table users populated successfully.")

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
        DROP TABLE IF EXISTS ${UserCookDatabase.TABLE_USERS};
        DROP TABLE IF EXISTS ${RecipeDatabase.TABLE_RECIPE};
        
        CREATE TABLE IF NOT EXISTS ${UserCookDatabase.TABLE_USERS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL" NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${RecipeDatabase.TABLE_RECIPE} (
            id VARCHAR(255) PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description VARCHAR(300) NOT NULL DEFAULT "This is a new recipe for you to learn and feed yourself",
            prepare TEXT(500) NOT NULL,
            created DATE NOT NULL
        );
        `)
    }

    insertUsers = async () => {
        await BaseDatabase
            .connection(UserCookDatabase.TABLE_USERS)
            .insert(users)
    }
}

const migrations = new Migrations()
migrations.execute()