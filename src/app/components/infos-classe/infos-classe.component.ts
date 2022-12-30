import {Component, Input} from '@angular/core';
import {Infos} from "../../entities/infos.entities";

@Component({
  selector: 'app-infos-classe',
  templateUrl: './infos-classe.component.html',
  styleUrls: ['./infos-classe.component.css']
})
export class InfosClasseComponent {
  @Input() infosClasse?:Infos[];

  ngOnInit() :void{

  }
}
