import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { iWeightTracking } from '../models/weight-tracking'
import { ApiDbService } from '../api-service/api-db.service'

@Injectable({
  providedIn: 'root'
})

export class WeightTrackingService {

  constructor(private apiTools: ApiDbService) { }

  public getByUser(){

  }

  public getAll(): Observable<iWeightTracking[]> {
    return this.apiTools.getWeightRecord()
  }
}
