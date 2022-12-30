import {Component, OnInit} from '@angular/core';
import {SalleService} from "../../services/salle.service";
import {ActivatedRoute} from "@angular/router";
import {Enseignant} from "../../entities/enseignant.entities";
import {Salle} from "../../entities/salle.entities";
import {EnseignantService} from "../../services/enseignant.service";
import {Infos} from "../../entities/infos.entities";

@Component({
  selector: 'app-enquetes-salle',
  templateUrl: './enquetes-salle.component.html',
  styleUrls: ['./enquetes-salle.component.css']
})
export class EnquetesSalleComponent implements OnInit{

  idsalle:number;
  sal?:Salle;
  allEns?:Enseignant[];
  choixEnseignant?:Enseignant;
  ensDeLaSalle?:Enseignant[];
  infosSal?:Infos[];
  constructor(private salleService:SalleService,private enseignantService:EnseignantService,private activeRoute:ActivatedRoute) {
    this.idsalle=activeRoute.snapshot.params.idsalle;
  }
  ngOnInit() :void{
    this.salleService.getSalle(this.idsalle).subscribe(
      data=>{this.sal=data},
      error=>{alert(error.headers.get("error"));}
    );
  }



  onListEns() {
    if (this.sal) {
      this.salleService.listEnseignant(this.sal).subscribe(
        data => {
          this.ensDeLaSalle = data
        },
        error => {
          alert(error.headers.get("error"));
        }
      );
    }

  }

  onClickAdd() {
    this.enseignantService.allEnseignants().subscribe(
      data=>{this.allEns=data;}
    );
  }


  onClickSupp(ens:Enseignant) {
    let ok = confirm('êtes vous sûr de vouloir supprimer ? ');
    if (ok){
      if (this.sal) {
        this.salleService.deleteEnseignant(ens, this.sal).subscribe(
          data => {
            this.onListEns();
          },
          error => {
            alert(error.headers.get("error"));
          }
        )
      }
    }

  }

  onAdd(ens:Enseignant) {
    if (this.sal) {
      this.salleService.addEnseignant(ens, this.sal).subscribe(
        data => {
          alert("Ajout reussit");
          this.onListEns();
        },
        error => {
          alert(error.headers.get("error"));
        }
      )
    }
  }

  onInfos() {
    if (this.sal) {
      this.salleService.getInfosSalle(this.sal).subscribe(
        data => {
          this.infosSal = data;
        },
        error => {
          alert(error.headers.get("error"));
        }
      )
    }
  }
}
