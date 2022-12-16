import {Component, OnInit} from '@angular/core';
import {Form} from "@angular/forms";
import {Cours} from "../../entities/cours.entities";
import {CoursService} from "../../services/cours.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit{

  cours?:Cours[];

  constructor(private coursService: CoursService,private router:Router) {
  }
  ngOnInit() : void {
  }

  onSearchByIntitule(value:any){
    this.coursService.searchCours(value.intitule).subscribe(
      data => {this.cours=data}
    )
  }

  onDelete(crs: Cours) {
    let ok = confirm('êtes vous sûr de vouloir supprimer ? ');
    if(ok){
      this.coursService.deleteCours(crs).subscribe(

        data => {
          this.onSearchByIntitule(crs);
        },
        err => {
          alert(err.headers.get("error"));
        }

      )
    }

  }

  onEdit(crs: Cours) {
    this.router.navigateByUrl('editCours/'+crs.idcours);
  }

  onDetails(crs: Cours) {

  }

  onNewCours() {
    this.router.navigateByUrl('newCours');
  }
}
