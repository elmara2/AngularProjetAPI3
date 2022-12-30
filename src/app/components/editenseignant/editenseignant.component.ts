import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SalleService} from "../../services/salle.service";
import {ActivatedRoute} from "@angular/router";
import {EnseignantService} from "../../services/enseignant.service";

@Component({
  selector: 'app-editenseignant',
  templateUrl: './editenseignant.component.html',
  styleUrls: ['./editenseignant.component.css']
})
export class EditenseignantComponent {

  enseignantFormGroup?: FormGroup;
  submitted = false;
  idenseignant: number;
  deleted=false;
  constructor(private enseignantService: EnseignantService, private fb:
    FormBuilder,activatedRoute : ActivatedRoute) {
    this.idenseignant=activatedRoute.snapshot.params.idenseignant;
  }
  ngOnInit(): void {
    this.enseignantService.getEnseignant(this.idenseignant).subscribe(
      enseignant =>{this.enseignantFormGroup = this.fb.group({
        idenseignant: [enseignant.idenseignant, Validators.required],
        matricule: [enseignant.matricule, Validators.required],
        nom: [enseignant.nom, Validators.required],
        prenom: [enseignant.prenom, Validators.required],
        tel: [enseignant.tel, Validators.required],
        chargesem: [enseignant.chargesem, [Validators.required,Validators.min(1)]],
        salairemensu: [enseignant.salairemensu, [Validators.required,Validators.min(1)]],
        dateengag: [enseignant.dateengag, Validators.required]
      })
      });
  }
  onUpdateEnseignant(): void {
    this.submitted = true;
    if (this.enseignantFormGroup?.invalid) {
      return;
    }
    this.enseignantService.updateEnseignant(this.enseignantFormGroup?.value).subscribe(data => {alert('maj ok')},
      err => {
        alert(err.headers.get("error"));
      });
  }

}
