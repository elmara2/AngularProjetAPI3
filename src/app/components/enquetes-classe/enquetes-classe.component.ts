import { Component } from '@angular/core';
import {Salle} from "../../entities/salle.entities";
import {Enseignant} from "../../entities/enseignant.entities";
import {Infos} from "../../entities/infos.entities";
import {SalleService} from "../../services/salle.service";
import {EnseignantService} from "../../services/enseignant.service";
import {ActivatedRoute} from "@angular/router";
import {Classe} from "../../entities/classe.entities";
import {ClasseService} from "../../services/classe.service";

@Component({
  selector: 'app-enquetes-classe',
  templateUrl: './enquetes-classe.component.html',
  styleUrls: ['./enquetes-classe.component.css']
})
export class EnquetesClasseComponent {
  idclasse:number;
  cl?:Classe;
  infosClasse?:Infos[];
  constructor(private classeService:ClasseService,private activeRoute:ActivatedRoute) {
    this.idclasse=activeRoute.snapshot.params.idclasse;
  }


  ngOnInit() :void{
    this.classeService.getClasse(this.idclasse).subscribe(
      data=>{this.cl=data},
      error=>{alert(error.headers.get("error"));}
    );
  }

  onInfos() {
    if (this.cl) {
      this.classeService.getInfosClasse(this.cl).subscribe(
        data => {
          this.infosClasse = data;
        },
        error => {
          alert(error.headers.get("error"));
        }
      )
    }
  }


}
