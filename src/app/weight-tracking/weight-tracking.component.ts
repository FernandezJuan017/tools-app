import { MatSort } from '@angular/material/sort'
import { MatTable } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'
import { WeightTrackingService } from './weight-tracking.service'
import { iWeightTracking } from '../models/weight-tracking'
import { OnInit, AfterViewInit, Component, ViewChild } from '@angular/core'
import { WeightTrackingDataSource } from './weight-tracking-datasource'

@Component({
  selector: 'app-weight-tracking',
  templateUrl: './weight-tracking.component.html',
  styleUrls: ['./weight-tracking.component.css']
})
export class WeightTrackingComponent implements  OnInit ,AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort
  @ViewChild(MatTable) table!: MatTable<iWeightTracking>

  dataSource: WeightTrackingDataSource

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'entity', 'date', 'weight']

  constructor(private WeightTrackingService: WeightTrackingService) {
    this.dataSource = new WeightTrackingDataSource()
  }

  ngOnInit(): void {
    this.WeightTrackingService.getAll().subscribe({
      next: (data) => { this.setDataSource(data) }, 
      error: (e) => {console.error("Get WeightTracking Records: "+ e)}
    })
  }

  private setDataSource(weightTrackingItems: iWeightTracking[]) {
    this.dataSource.data = this.WeightTrackingService.generateObjects(weightTrackingItems) 
    this.table.dataSource = this.dataSource 
       
    console.log("🚀 ~ file: weight-tracking.component.ts:41 ~ WeightTrackingComponent ~ setDataSource ~ this.table.dataSource:", this.table.dataSource)
  }


  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
  }
}
