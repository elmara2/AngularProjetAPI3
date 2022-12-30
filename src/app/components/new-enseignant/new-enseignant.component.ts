import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SalleService} from "../../services/salle.service";
import {EnseignantService} from "../../services/enseignant.service";

@Component({
  selector: 'app-new-enseignant',
  templateUrl: './new-enseignant.component.html',
  styleUrls: ['./new-enseignant.component.css']
})
export class NewEnseignantComponent {

  enseignantFormGroup?: FormGroup;
  submitted = false;
  idenseignant:number|null=null;
  constructor(private fb: FormBuilder, private enseignantService:
    EnseignantService) { }
  ngOnInit(): void {
    this.enseignantFormGroup = this.fb.group({
      matricule: ["", Validators.required],
      nom: ["", Validators.required],
      prenom: ["", Validators.required],
      tel: ["", Validators.required],
      chargesem: ["", [Validators.required,Validators.min(1)]],
      salairemensu: ["", [Validators.required,Validators.min(1)]],
      dateengag: [2000-12-12, Validators.required]
    });
  }
  onSaveEnseignant() {
    this.submitted = true;
    if (this.enseignantFormGroup?.invalid) { return; }

    this.enseignantService.save(this.enseignantFormGroup?.value).subscribe(data =>
      {alert('sauvegarde ok');this.idenseignant=data.idenseignant},
      err => {
        alert(err.headers.get("error"));
      });
  }
}
