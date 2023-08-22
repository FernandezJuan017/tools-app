import { Entity } from "./entity"

export interface iWeightTracking {
    id: bigint
    entity: Entity
    date: Date
    weight: number
}

export class WeightTracking implements iWeightTracking {
    id: bigint
    entity: Entity
    date: Date
    weight: number

    constructor(private pWeigthTracking: iWeightTracking) {
        this.id = pWeigthTracking.id
        this.entity = new Entity(pWeigthTracking.entity)
        this.date = pWeigthTracking.date
        this.weight = pWeigthTracking.weight
    }
   
    get fullname(): string {
        return this.entity.fullname
    }
}
