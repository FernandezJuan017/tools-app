export interface iEntity {
    id: bigint
    name: string
    surname: string
    date_birth: Date
}

export class Entity implements iEntity{
    id: bigint
    name: string
    surname: string
    date_birth: Date

    constructor(pEntity: iEntity){
        this.id = pEntity.id
        this.name = pEntity.name
        this.surname = pEntity.surname
        this.date_birth = pEntity.date_birth
    }

    get fullname(): string {
        return `${this.name}, ${this.surname}`
    }
    
}