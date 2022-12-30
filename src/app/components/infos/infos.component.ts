import { Component } from '@angular/core';
import {InfosService} from "../../services/infos.service";
import {Infos} from "../../entities/infos.entities";
import {Enseignant} from "../../entities/enseignant.entities";
import {Salle} from "../../entities/salle.entities";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent {
  infos: Infos|null=null;
  idclasse :number=0;
  idcours :number=0;
  constructor(private infosService: InfosService) {
  }
  ngOnInit(): void {}
  onSearch() {
    this.infos=null;
    this.infosService.getInfos(this.idclasse,this.idcours).subscribe(
      {next : data => this.infos=data,
        error : error=>alert("infos introuvable")
      })
  }

  onNewEns(ens:Enseignant){
    if (this.infos){
      this.infosService.updateEnseignant(this.infos,ens).subscribe(
        {next : data => {
            this.infos = data;
            alert("modification effectuée")
          },
          error : error=>alert("UNE ERREUR EST SURVENUE")
        }
      )
    }
  }

  onNewNbreHeure(n:number){
    if (this.infos){
      this.infosService.updateNbreHeure(this.infos,n).subscribe(
        {next: data=>{this.infos=data;alert("modification effectuée")},
        error: error=>alert("UNE ERREUR EST SURVENUE")}
      )
    }
  }

  onNewSal(sal:Salle){
    if (this.infos){
      this.infosService.updateSalle(this.infos,sal).subscribe(
        {next : data => {
            this.infos = data;
            alert("modification effectuée")
          },
          error : error=>alert("UNE ERREUR EST SURVENUE")
        }
      )
    }
  }


}
