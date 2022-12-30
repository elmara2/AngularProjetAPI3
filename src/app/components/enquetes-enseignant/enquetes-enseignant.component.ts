import { Component } from '@angular/core';
import {Salle} from "../../entities/salle.entities";
import {Enseignant} from "../../entities/enseignant.entities";
import {Infos} from "../../entities/infos.entities";
import {SalleService} from "../../services/salle.service";
import {EnseignantService} from "../../services/enseignant.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-enquetes-enseignant',
  templateUrl: './enquetes-enseignant.component.html',
  styleUrls: ['./enquetes-enseignant.component.css']
})
export class EnquetesEnseignantComponent {

  idenseignant:number;
  ens?:Enseignant;
  salleDeEnsg?:Salle;
  salChoisir?:Salle;
  allSalle?:Salle[];
  infosEns?:Infos[];
  constructor(private enseignantService:EnseignantService,private salleService:SalleService,private activeRoute:ActivatedRoute) {
    this.idenseignant=activeRoute.snapshot.params.idenseignant;
  }
  ngOnInit() :void{
    this.enseignantService.getEnseignant(this.idenseignant).subscribe(
      data=>{this.ens=data},
      error=>{alert(error.headers.get("error"));}
    );
  }



  onSalle() {
    if (this.ens) {
      this.enseignantService.getSalleEnseignant(this.ens).subscribe(
        data => {
          this.salleDeEnsg = data
        },
        error => {
          alert(error.headers.get("error"));
        }
      );
    }

  }


  onUpdate() {
    if (this.salChoisir && this.ens){
      this.enseignantService.updateSalle(this.ens,this.salChoisir).subscribe(
        data=>{this.ens=data;this.onSalle();alert("maj ok");},
        error => {
          alert(error.headers.get("error"));
        }
      )
    }
  }

  onListeSalle() {
    this.salleService.allSalles().subscribe(
      data => {this.allSalle=data},
      error => {
        alert(error.headers.get("error"));
      }
    )
  }

  choixSalle(sal: Salle) {
    this.salChoisir=sal;
  }

  onInfos() {
    if (this.ens) {
      this.enseignantService.getInfosEnseignant(this.ens).subscribe(
        data => {
          this.infosEns = data;
        },
        error => {
          alert(error.headers.get("error"));
        }
      )
    }
  }
}
