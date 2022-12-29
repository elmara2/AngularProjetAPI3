import { Component ,OnInit} from '@angular/core';
import {Classe} from "../../entities/classe.entities";
import {ClasseService} from "../../services/classe.service";
import {Router} from "@angular/router";
import {Enseignant} from "../../entities/enseignant.entities";
import {EnseignantService} from "../../services/enseignant.service";

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit{

  classes?:Classe[];
  constructor(private classeService: ClasseService,private router:Router) {
  }
  ngOnInit() {
  }

  onSearch(value:any){
    this.classeService.searchClasseSpecialite(value.specialite).subscribe(
      data => {this.classes=data}
    )
  }

  onDelete(cl: Classe) {
    let ok = confirm('êtes vous sûr de vouloir supprimer ? ');
    if(ok){
      this.classeService.deleteClasse(cl).subscribe(

        data => {
          this.onSearch(cl);
        },
        err => {
          alert(err.headers.get("error"));
        }

      )
    }

  }

  onEdit(cl: Classe) {
    this.router.navigateByUrl('editClasse/'+cl.idclasse);
  }

  onEnquete(cl: Classe) {
    this.router.navigateByUrl('enqueteClasse/'+cl.idclasse);
  }

  onNewClasse() {
    this.router.navigateByUrl('newClasse');
  }
}
