import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { CoursComponent } from './components/cours/cours.component';
import { SallesComponent } from './components/salles/salles.component';
import { ClassesComponent } from './components/classes/classes.component';
import { EnseignantsComponent } from './components/enseignants/enseignants.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    CoursComponent,
    SallesComponent,
    EnseignantsComponent,
    ClassesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
