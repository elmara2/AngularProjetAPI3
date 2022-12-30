import {Component, OnInit} from '@angular/core';
import {CoursService} from "../../services/cours.service";
import {ActivatedRoute} from "@angular/router";
import {Cours} from "../../entities/cours.entities";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Infos} from "../../entities/infos.entities";
import {Classe} from "../../entities/classe.entities";
import {ClasseService} from "../../services/classe.service";

@Component({
  selector: 'app-enquetes-cours',
  templateUrl: './enquetes-cours.component.html',
  styleUrls: ['./enquetes-cours.component.css']
})
export class EnquetesCoursComponent implements OnInit{
  idcours:number;
  crs?:Cours;
  infosCours?:Infos[];
  constructor(private coursService:CoursService,private activeRoute:ActivatedRoute) {
    this.idcours=activeRoute.snapshot.params.idcours;
  }


  ngOnInit() :void{
    this.coursService.getCours(this.idcours).subscribe(
      data=>{this.crs=data},
      error=>{alert(error.headers.get("error"));}
    );
  }

  onInfos() {
    if (this.crs) {
      this.coursService.getInfosCours(this.crs).subscribe(
        data => {
          this.infosCours = data;
        },
        error => {
          alert(error.headers.get("error"));
        }
      )
    }
  }
}
