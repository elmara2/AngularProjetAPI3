import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClassesComponent} from "./components/classes/classes.component";
import {CoursComponent} from "./components/cours/cours.component";
import {EnseignantsComponent} from "./components/enseignants/enseignants.component";
import {SallesComponent} from "./components/salles/salles.component";
import {HomeComponent} from "./components/home/home.component";
import {NewCoursComponent} from "./components/new-cours/new-cours.component";
import {EditcoursComponent} from "./components/editcours/editcours.component";
import {InfosComponent} from "./components/infos/infos.component";

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"classes",component:ClassesComponent},
  {path:"cours",component:CoursComponent},
  {path:"enseignants",component:EnseignantsComponent},
  {path:"salles",component:SallesComponent},
  {path:"infos",component:InfosComponent},
  {path:"newCours",component:NewCoursComponent},
  {path:"editCours/:idcours",component:EditcoursComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
