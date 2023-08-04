import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

//Angular Material
import { MaterialModule } from './material/material.module'


//Routing
import { AppRoutingModule } from './app-routing/app-routing.module'

//Componentes
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent],
  imports: [BrowserModule, MaterialModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}