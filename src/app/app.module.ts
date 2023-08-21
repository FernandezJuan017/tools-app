import { NgModule } from "@angular/core"

//Angular Material
import { MaterialModule } from './material/material.module'


//Routing
import { AppRoutingModule } from './app-routing/app-routing.module'

// Add Service to Provider 
import { ApiDbService } from './api-service/api-db.service'

// Http Client
import { HttpClientModule } from '@angular/common/http';


//Componentes
import { AppComponent } from "./app.component"
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ResponsiveAppComponent } from './responsive-app/responsive-app.component'
import { LayoutModule } from '@angular/cdk/layout'
import { WeightTrackingComponent } from './weight-tracking/weight-tracking.component'

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, ResponsiveAppComponent, WeightTrackingComponent],
  imports: [MaterialModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            LayoutModule,
            HttpClientModule
           ],
  providers: [ApiDbService],
  bootstrap: [AppComponent],
})

export class AppModule {}