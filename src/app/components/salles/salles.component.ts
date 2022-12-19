import { Component } from '@angular/core';
import {Cours} from "../../entities/cours.entities";
import {CoursService} from "../../services/cours.service";
import {Router} from "@angular/router";
import {Salle} from "../../entities/salle.entities";
import {SalleService} from "../../services/salle.service";

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.css']
})
export class SallesComponent {

  salle?:Salle;
  constructor(private salleService: SalleService,private router:Router) {
  }
  ngOnInit() : void {
  }

  onSearch(value:any){
    this.salleService.searchSalleUnique(value.sigle).subscribe(
      data => {this.salle=data}
    )
  }

  onDelete(sal: Salle) {
    let ok = confirm('êtes vous sûr de vouloir supprimer ? ');
    if(ok){
      this.salleService.deleteSalle(sal).subscribe(

        data => {
          this.onSearch(sal);
        },
        err => {
          alert(err.headers.get("error"));
        }

      )
    }

  }

  onEdit(sal: Salle) {
    this.router.navigateByUrl('editSalle/'+sal.idsalle);
  }

  onEnquete(sal: Salle) {
    this.router.navigateByUrl('enqueteSalle/'+sal.idsalle);
  }

  onNewSalle() {
    this.router.navigateByUrl('newSalle');
  }
}
