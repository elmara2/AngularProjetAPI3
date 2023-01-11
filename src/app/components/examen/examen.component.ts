import {Component, OnInit} from '@angular/core';
import {EnseignantService} from "../../services/enseignant.service";
import {Router} from "@angular/router";
import {Enseignant} from "../../entities/enseignant.entities";
import {SalleService} from "../../services/salle.service";
import {Salle} from "../../entities/salle.entities";

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit{
  salles?:Salle[];
  constructor(private enseignantService: EnseignantService,private router:Router) {
  }
  ngOnInit() {
  }

  onSearch(value: any) {
    this.enseignantService.searchSalleEnsgNom(value.nom).subscribe(
      data => {this.salles=data}
    );

  }
}
