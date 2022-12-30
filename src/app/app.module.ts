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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { EditclasseComponent } from './components/editclasse/editclasse.component';
import { EditcoursComponent } from './components/editcours/editcours.component';
import { EditenseignantComponent } from './components/editenseignant/editenseignant.component';
import { EditsalleComponent } from './components/editsalle/editsalle.component';
import { NewClasseComponent } from './components/new-classe/new-classe.component';
import { NewCoursComponent } from './components/new-cours/new-cours.component';
import { NewEnseignantComponent } from './components/new-enseignant/new-enseignant.component';
import { NewSalleComponent } from './components/new-salle/new-salle.component';
import { InfosComponent } from './components/infos/infos.component';
import { EditinfosComponent } from './components/editinfos/editinfos.component';
import { EnquetesCoursComponent } from './components/enquetes-cours/enquetes-cours.component';
import { EnquetesSalleComponent } from './components/enquetes-salle/enquetes-salle.component';
import { InfosSalleComponent } from './components/infos-salle/infos-salle.component';
import { InfosCoursComponent } from './components/infos-cours/infos-cours.component';
import { InfosClasseComponent } from './components/infos-classe/infos-classe.component';
import { InfosEnseignantComponent } from './components/infos-enseignant/infos-enseignant.component';
import { EnquetesEnseignantComponent } from './components/enquetes-enseignant/enquetes-enseignant.component';
import { EnquetesClasseComponent } from './components/enquetes-classe/enquetes-classe.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    CoursComponent,
    SallesComponent,
    EnseignantsComponent,
    ClassesComponent,
    HomeComponent,
    EditclasseComponent,
    EditcoursComponent,
    EditenseignantComponent,
    EditsalleComponent,
    NewClasseComponent,
    NewCoursComponent,
    NewEnseignantComponent,
    NewSalleComponent,
    InfosComponent,
    EditinfosComponent,
    EnquetesCoursComponent,
    EnquetesSalleComponent,
    InfosSalleComponent,
    InfosCoursComponent,
    InfosClasseComponent,
    InfosEnseignantComponent,
    EnquetesEnseignantComponent,
    EnquetesClasseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
