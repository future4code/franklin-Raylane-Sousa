import { InGetRecipesDBDTO, Recipe, RecipeDB } from "../models/Recipe"
import { BaseDatabase } from "./BaseDatabase"

export class RecipeDatabase extends BaseDatabase {
    public static TABLE_RECIPE = "RecipeCook"

    public findByTitle = async (title: string) => {
        const recipesDB: RecipeDB[] = await BaseDatabase
            .connection(RecipeDatabase.TABLE_RECIPE)
            .select()
            .where({ title })

        return recipesDB[0]
    }

    public createRecipe = async (recipe: Recipe) => {
        const recipeDB: RecipeDB = {
            id: recipe.getId(),
            title: recipe.getTitle(),
            description: recipe.getDescription(),
            prepare: recipe.getPrepareMode(),
            created: recipe.getCreated()
        }

        await BaseDatabase
            .connection(RecipeDatabase.TABLE_RECIPE)
            .insert(recipeDB)
    }

    public getRecipes = async (input: InGetRecipesDBDTO) => {
        const search = input.search
        const order = input.order
        const sort = input.sort
        const limit = input.limit
        const offset = input.offset

        const recipesDB: RecipeDB[] = await BaseDatabase
            .connection(RecipeDatabase.TABLE_RECIPE)
            .select()
            .where("title", "LIKE", `%${search}%`)
            .orderBy(order, sort)
            .limit(limit)
            .offset(offset)
        
        return recipesDB
    }

    public findById = async (id: string) => {
        const recipesDB: RecipeDB[] = await BaseDatabase
            .connection(RecipeDatabase.TABLE_RECIPE)
            .select()
            .where({ id })

        return recipesDB[0]
    }

    public deleteRecipe = async (id: string) => {
        await BaseDatabase
            .connection(RecipeDatabase.TABLE_RECIPE)
            .delete()
            .where({ id })
    }

    public editRecipe = async (recipe: Recipe) => {
        const recipeDB: RecipeDB = {
            id: recipe.getId(),
            title: recipe.getTitle(),
            description: recipe.getDescription(),
            prepare: recipe.getPrepareMode(),
            created: recipe.getCreated()
        }
        
        await BaseDatabase
            .connection(RecipeDatabase.TABLE_RECIPE)
            .update(recipeDB)
            .where({ id: recipeDB.id })
    }
}