import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EnseignantService} from "../../services/enseignant.service";
import {ActivatedRoute} from "@angular/router";
import {ClasseService} from "../../services/classe.service";

@Component({
  selector: 'app-editclasse',
  templateUrl: './editclasse.component.html',
  styleUrls: ['./editclasse.component.css']
})
export class EditclasseComponent {
  classeFormGroup?: FormGroup;
  submitted = false;
  idclasse: number;
  deleted=false;
  constructor(private classeService: ClasseService, private fb:
    FormBuilder,activatedRoute : ActivatedRoute) {
    this.idclasse=activatedRoute.snapshot.params.idclasse;
  }
  ngOnInit(): void {
    this.classeService.getClasse(this.idclasse).subscribe(
      classe =>{this.classeFormGroup = this.fb.group({
        idclasse: [classe.idclasse, Validators.required],
        sigle: [classe.sigle, Validators.required],
        annee: [classe.annee, [Validators.required,Validators.min(1),Validators.max(7)]],
        specialite: [classe.specialite, Validators.required],
        nbreeleves: [classe.nbreeleves, [Validators.required,Validators.min(1)]]
      })
      });
  }
  onUpdateClasse(): void {
    this.submitted = true;
    if (this.classeFormGroup?.invalid) {
      return;
    }
    this.classeService.updateClasse(this.classeFormGroup?.value).subscribe(data => {alert('maj ok')},
      err => {
        alert(err.headers.get("error"));
      });
  }

}
