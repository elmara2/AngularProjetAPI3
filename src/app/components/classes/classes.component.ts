import { Component ,OnInit} from '@angular/core';
import {Classe} from "../../entities/classe.entities";
import {ClasseService} from "../../services/classe.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit{

  classe?: Classe;
  constructor(private classeService: ClasseService, private router:Router) { }
  ngOnInit() {
  }

  onSearch(value:any){
    this.classeService.getClasse(value.idclasse).subscribe({
      next: data=> {
        this.classe = data
      }
    })
  }
}
