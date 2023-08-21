import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { iWeightTracking } from '../models/weight-tracking'
import { enviroment } from '../../enviroments/enviroment'

@Injectable({
  providedIn: 'root'
})

export class ApiDbService {

  /**
   * Properties
  */
  private apiURL : string = ""

  constructor(private http: HttpClient) { 
    this.apiURL = enviroment.url_api
  }

  public getWeightRecord(): Observable<iWeightTracking[]>{
    let url = this.apiURL + '/weight-records'

    return this.http.get<iWeightTracking[]>(url)
  }

}
