import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CoursService} from "../../services/cours.service";
import {EnseignantService} from "../../services/enseignant.service";
import {ClasseService} from "../../services/classe.service";

@Component({
  selector: 'app-new-classe',
  templateUrl: './new-classe.component.html',
  styleUrls: ['./new-classe.component.css']
})
export class NewClasseComponent implements OnInit{
  classeFormGroup?: FormGroup;
  submitted = false;
  idclasse:number|null=null;
  constructor(private fb: FormBuilder, private classeService:
    ClasseService) { }
  ngOnInit(): void {
    this.classeFormGroup = this.fb.group({
      sigle: ["", Validators.required],
      annee: ["", [Validators.required,Validators.min(1),Validators.max(7)]],
      specialite: ["", Validators.required],
      nbreeleves: ["", [Validators.required,Validators.min(1)]]
    });
  }
  onSaveClasse() {
    this.submitted = true;
    if (this.classeFormGroup?.invalid) { return; }

    this.classeService.save(this.classeFormGroup?.value).subscribe(data =>
      {alert('sauvegarde ok');this.idclasse=data.idclasse},
      err => {
        alert(err.headers.get("error"));
      });
  }
}
