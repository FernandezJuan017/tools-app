import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { enviroment } from '../../enviroments/enviroment'

@Injectable({
  providedIn: 'root'
})

export class ApiDbService {

  /**
   * Properties
   */
  private apiURL : string = ""

  constructor() { 
    this.apiURL = enviroment.url_api
  }

}
