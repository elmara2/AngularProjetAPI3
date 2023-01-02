import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Infos} from "../../entities/infos.entities";
import {InfosService} from "../../services/infos.service";
import {Enseignant} from "../../entities/enseignant.entities";
import {Salle} from "../../entities/salle.entities";
import {EnseignantService} from "../../services/enseignant.service";
import {SalleService} from "../../services/salle.service";

@Component({
  selector: 'app-editinfos',
  templateUrl: './editinfos.component.html',
  styleUrls: ['./editinfos.component.css']
})
export class EditinfosComponent implements OnInit{
  infosFormGroup?: FormGroup;
  submitted=false;
  @Input() infos?:Infos;
  @Output() newEns=new EventEmitter<Enseignant>();
  @Output() newSal=new EventEmitter<Salle>();
  @Output() nbreheureInf=new EventEmitter<number>();
  deleted=false;
  constructor(private infosService: InfosService,private enseignantService:EnseignantService,private salleService:SalleService,private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.infosFormGroup = this.fb.group({
      idclasse: [this.infos?.classe.idclasse,Validators.required],
      idcours: [this.infos?.cours.idcours,Validators.required],
      nbreheures: [this.infos?.nbreheures,[Validators.required,Validators.min(1)]]
    });

  }

  onDeleteInfos() {
    let v = confirm('êtes vous sûr de vouloir supprimer ? ');
    if (v) {
      if (this.infos){
        this.infosService.deleteInfos(this.infos).subscribe(data => {
            alert('effacement ok');
            this.deleted=true;
          },
          err => {alert(err.headers.get("error"));
          });
      }
    }
  }

  onSearchEns(value: any) {
    this.enseignantService.getEnseignant(value.idenseignant).subscribe(
      data => {this.newEns.emit(data);},
    err => {alert(err.headers.get("error"))}
    )
  }

  onSearchSal(value: any) {
    this.salleService.getSalle(value.idsalle).subscribe(
      data => {this.newSal.emit(data);},
      err => {alert(err.headers.get("error"))}
    )
  }

  onUpdateNbreHeures(value:any) {
    this.nbreheureInf.emit(value.nbreheures);
  }
}
