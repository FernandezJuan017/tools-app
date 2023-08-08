import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
// Components Angular Material v16.1.7
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule} from '@angular/material/toolbar'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [MatSidenavModule,
            MatButtonModule,
            MatToolbarModule,
            MatIconModule]
})
export class MaterialModule { }
