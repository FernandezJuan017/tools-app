export class WeightTracking implements iWeightTracking {
    id: bigint
    entity_id: bigint
    date: Date
    weight: number

    constructor(private pWeigthTracking: iWeightTracking) {
        this.id = pWeigthTracking.id
        this.entity_id = pWeigthTracking.entity_id
        this.date = pWeigthTracking.date
        this.weight = pWeigthTracking.weight
    }
    
}

export interface iWeightTracking {
    id: bigint
    entity_id: bigint
    date: Date
    weight: number
}