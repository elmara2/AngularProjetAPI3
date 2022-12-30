import {Component, Input, OnInit} from '@angular/core';
import {Infos} from "../../entities/infos.entities";
import {EnseignantService} from "../../services/enseignant.service";
import {SalleService} from "../../services/salle.service";

@Component({
  selector: 'app-infos-salle',
  templateUrl: './infos-salle.component.html',
  styleUrls: ['./infos-salle.component.css']
})
export class InfosSalleComponent implements OnInit{
  @Input() infosSalle?:Infos[];

  ngOnInit() :void{

  }
}
