import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClassesComponent} from "./components/classes/classes.component";
import {CoursComponent} from "./components/cours/cours.component";
import {EnseignantsComponent} from "./components/enseignants/enseignants.component";
import {SallesComponent} from "./components/salles/salles.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"classes",component:ClassesComponent},
  {path:"cours",component:CoursComponent},
  {path:"enseignants",component:EnseignantsComponent},
  {path:"salles",component:SallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
