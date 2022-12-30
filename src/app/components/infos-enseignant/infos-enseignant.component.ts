import {Component, Input, OnInit} from '@angular/core';
import {Infos} from "../../entities/infos.entities";

@Component({
  selector: 'app-infos-enseignant',
  templateUrl: './infos-enseignant.component.html',
  styleUrls: ['./infos-enseignant.component.css']
})
export class InfosEnseignantComponent implements OnInit{
  @Input() infosEnseignant?:Infos[];

  ngOnInit():void{
  }
}
