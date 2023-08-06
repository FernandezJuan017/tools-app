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

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent],
  imports: [MaterialModule,
            AppRoutingModule,
            BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}