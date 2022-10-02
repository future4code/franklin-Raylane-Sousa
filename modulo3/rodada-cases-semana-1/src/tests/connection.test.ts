import { BaseDatabase } from "../database/BaseDatabase"


describe("Testing database connection", () =>{
    
    afterAll(()=> {
        BaseDatabase .connection.destroy()
    })

    it("Checking if tables exist in the database", async () => {
    
        const [dbTables] = await BaseDatabase .connection.raw(`
        SHOW TABLES
        `)

        console.log(dbTables);

        expect(dbTables).toBeDefined()
        expect(dbTables).toContainEqual({"Tables_in_franklin-raylane-sousa":"AmaroUser"})
        expect(dbTables).toContainEqual({"Tables_in_franklin-raylane-sousa":"AmaroProducts"})
        expect(dbTables).toContainEqual({"Tables_in_franklin-raylane-sousa":"AmaroTags"})
    })

})