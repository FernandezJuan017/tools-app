import { NgModule } from "@angular/core";

//Angular Material
import { MaterialModule } from './material/material.module'


//Routing
import { AppRoutingModule } from './app-routing/app-routing.module'

//Componentes
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResponsiveAppComponent } from './responsive-app/responsive-app.component';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, ResponsiveAppComponent],
  imports: [MaterialModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}