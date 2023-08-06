import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components Angular Material v16.1.7
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [MatSidenavModule,
            MatButtonModule]
})
export class MaterialModule { }
