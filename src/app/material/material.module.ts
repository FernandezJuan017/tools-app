import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
// Components Angular Material v16.1.7
import {MatIconModule} from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatSortModule } from '@angular/material/sort'
import {MatButtonModule} from '@angular/material/button'
import { MatTableModule } from '@angular/material/table'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule} from '@angular/material/toolbar'
import { MatPaginatorModule } from '@angular/material/paginator'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [MatSidenavModule,
            MatButtonModule,
            MatToolbarModule,
            MatIconModule,
            MatListModule,
            MatTableModule,
            MatPaginatorModule,
            MatSortModule]
})
export class MaterialModule { }
