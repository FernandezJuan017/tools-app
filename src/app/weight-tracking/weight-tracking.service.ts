import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { iWeightTracking, WeightTracking } from '../models/weight-tracking'
import { ApiDbService } from '../api-service/api-db.service'

@Injectable({
  providedIn: 'root'
})

export class WeightTrackingService {

  private WeightRecordsItems: WeightTracking[] = []

  constructor(private apiTools: ApiDbService) { }

  public getByUser(){

  }

  public getAll(): Observable<iWeightTracking[]> {
    return this.apiTools.getWeightRecord()
  }

  public generateObjects(iWeightRecords: iWeightTracking[]): WeightTracking[] {
   this.WeightRecordsItems = []

   iWeightRecords.map((x) => {
    this.WeightRecordsItems.push(new WeightTracking(x))
   })

   return this.WeightRecordsItems
  }
}
