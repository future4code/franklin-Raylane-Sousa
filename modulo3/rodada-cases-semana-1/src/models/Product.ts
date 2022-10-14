export interface CreateInputDTO {
    token: string,
    id: string,
    name: string,
    tag_id: string
}

export interface CreateOutputDTO {
    message: string
}

export interface ProductDB {
    id: string,
    name: string
    tag_id: string
}

export interface TagDB {
    id: string,
    name: string
}

export class Product {
    constructor(
        private id: string,
        private name: string,
        private tag_id: string
    ) { }

    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }

    public getTag = () => {
        return this.tag_id
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setName = (newName: string) => {
        this.name = newName
    }

    public setTag = (newTag: string) => {
        this.tag_id = newTag
    }
}

export interface ProductsInputDTO {
    search: string,
    order: string,
    sort: string,
    limit: string,
    page: string,
}

export interface ProductsInputDBDTO {
    search: string,
    order: string,
    sort: string,
    limit: number,
    offset: number,
}

export class Tag {
    constructor(
        private id: string,
        private name: string,
    ) { }

    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setName = (newName: string) => {
        this.name = newName
    }

}
