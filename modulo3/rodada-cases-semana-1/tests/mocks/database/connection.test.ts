import { BaseDatabase } from "../../../src/database/BaseDatabase"


describe("Testing database connection", () =>{
    
    afterAll(async ()=> {

        await BaseDatabase .connection.raw(
            `DROP TABLE IF EXISTS testToTest`
        )
        BaseDatabase .connection.destroy()

    })

    it("should create new table in database", async() =>{
        await BaseDatabase .connection.raw(
            `CREATE TABLE IF NOT EXISTS testToTest (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL
            )`
        )
    })

    it("Checking if tables exist in the database", async () => {

        const [dbTables] = await BaseDatabase .connection.raw(`
        SHOW TABLES
        `)  
        
        expect(dbTables).toBeDefined()
        expect(dbTables).toContainEqual({"Tables_in_franklin-raylane-sousa":"AmaroUser"})
        expect(dbTables).toContainEqual({"Tables_in_franklin-raylane-sousa":"AmaroProducts"})
        expect(dbTables).toContainEqual({"Tables_in_franklin-raylane-sousa":"AmaroTags"})

    })

    
})