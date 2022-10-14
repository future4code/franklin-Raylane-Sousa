import { RecipeDatabase } from "../src/database/RecipeDatabase";


describe("Test 'RecipeDataBase' class", ()=> {
  
     test("Create Recipe", async () => {
        const recipe: any  = {
          id: "bae4a797-5e0e-42f3-b451-8c8c3e5fd313",
          title: "Título",
          description: "Conteúdo",
          prepare: "Prepare o prato"
        };

        const newRecipe = await new RecipeDatabase().findById(recipe.id);
    
        expect(newRecipe).not.toBe(undefined);
        expect(newRecipe).toEqual({
          id: "bae4a797-5e0e-42f3-b451-8c8c3e5fd313",
          title: "Título",
          description: "Conteúdo",
          prepare: "Prepare o prato"
        });
      }); 

})