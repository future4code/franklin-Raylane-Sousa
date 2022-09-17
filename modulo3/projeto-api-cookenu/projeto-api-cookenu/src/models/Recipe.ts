export interface RecipeDB {
    id: string,
    title: string,
    description: string,
    prepare: string,
    created: Date
}

export interface InGetRecipesDBDTO {
    search: string,
    order: string,
    sort: string,
    limit: number,
    offset: number
}

export class Recipe {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private prepare: string,
        private created: Date
    ) { }

    public getId = () => {
        return this.id
    }

    public getTitle = () => {
        return this.title
    }

    public getDescription = () => {
        return this.description
    }

    public getPrepareMode = () => {
        return this.prepare
    }

    public getCreated = () => {
        return this.created
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setTitle = (newTitle: string) => {
        this.title = newTitle
    }

    public setDesc = (newDesc: string) => {
        this.description = newDesc
    }

    public setPrepare = (newPrepare: string) => {
        this.prepare = newPrepare
    }
 
    public setUpdateDate = (newCreated: Date) => {
        this.created = newCreated
    }
}