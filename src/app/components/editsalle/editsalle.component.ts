import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Salle} from "../../entities/salle.entities";
import {SallesComponent} from "../salles/salles.component";
import {SalleService} from "../../services/salle.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-editsalle',
  templateUrl: './editsalle.component.html',
  styleUrls: ['./editsalle.component.css']
})
export class EditsalleComponent implements OnInit{
  salleFormGroup?: FormGroup;
  submitted = false;
  idsalle: number;
  deleted=false;
  constructor(private salleService: SalleService, private fb:
    FormBuilder,activatedRoute : ActivatedRoute) {
  this.idsalle=activatedRoute.snapshot.params.idsalle;
}
  ngOnInit(): void {
    this.salleService.getSalle(this.idsalle).subscribe(
      salle =>{this.salleFormGroup = this.fb.group({
        idsalle: [salle.idsalle, Validators.required],
        sigle: [salle.sigle, Validators.required],
        capacite: [salle.capacite, [Validators.required,Validators.min(1)]]
      })
      });
  }
  onUpdateSalle(): void {
    this.submitted = true;
    if (this.salleFormGroup?.invalid) {
      return;
    }
    this.salleService.updateSalle(this.salleFormGroup?.value).subscribe(data => {alert('maj ok')},
      err => {
        alert(err.headers.get("error"));
      });
  }

}
