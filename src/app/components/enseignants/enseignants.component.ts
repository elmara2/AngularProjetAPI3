import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cours} from "../../entities/cours.entities";
import {CoursService} from "../../services/cours.service";
import {FormGroup} from "@angular/forms";
import {Enseignant} from "../../entities/enseignant.entities";
import {EnseignantService} from "../../services/enseignant.service";
import {SalleService} from "../../services/salle.service";
import {Salle} from "../../entities/salle.entities";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Infos} from "../../entities/infos.entities";
import {Router} from "@angular/router";

@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.css']
})
export class EnseignantsComponent implements OnInit{

  enseignants?:Enseignant[];
  constructor(private enseignantService: EnseignantService,private router:Router) {
  }
  ngOnInit() {
  }

  onSearch(value:any){
    this.enseignantService.searchEnseignantNom(value.nom).subscribe(
      data => {this.enseignants=data}
    )
  }

  onDelete(ens: Enseignant) {
    let ok = confirm('êtes vous sûr de vouloir supprimer ? ');
    if(ok){
      this.enseignantService.deleteEnseignant(ens).subscribe(

        data => {
          this.onSearch(ens);
        },
        err => {
          alert(err.headers.get("error"));
        }

      )
    }

  }

  onEdit(ens: Enseignant) {
    this.router.navigateByUrl('editEnseignant/'+ens.idenseignant);
  }

  onEnquete(ens: Enseignant) {
    this.router.navigateByUrl('enqueteEnseignant/'+ens.idenseignant);
  }

  onNewEnseignant() {
    this.router.navigateByUrl('newEnseignant');
  }

}
