import {Component, Input} from '@angular/core';
import {Infos} from "../../entities/infos.entities";

@Component({
  selector: 'app-infos-cours',
  templateUrl: './infos-cours.component.html',
  styleUrls: ['./infos-cours.component.css']
})
export class InfosCoursComponent {
  @Input() infosCours?:Infos[];

  ngOnInit() :void{

  }
}
