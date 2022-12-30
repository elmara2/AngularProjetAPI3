import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Salle} from "../../entities/salle.entities";
import {SalleService} from "../../services/salle.service";

@Component({
  selector: 'app-new-salle',
  templateUrl: './new-salle.component.html',
  styleUrls: ['./new-salle.component.css']
})
export class NewSalleComponent implements OnInit{
  salleFormGroup?: FormGroup;
  submitted = false;
  idsalle:number|null=null;
  constructor(private fb: FormBuilder, private salleService:
    SalleService) { }
  ngOnInit(): void {
    this.salleFormGroup = this.fb.group({
      sigle: ["", Validators.required],
      capacite: ["", [Validators.required,Validators.min(1)]]
    });
  }
  onSaveSalle() {
    this.submitted = true;
    if (this.salleFormGroup?.invalid) { return; }

    this.salleService.save(this.salleFormGroup?.value).subscribe(data =>
      {alert('sauvegarde ok');this.idsalle=data.idsalle},
      err => {
        alert(err.headers.get("error"));
      });
  }


}
