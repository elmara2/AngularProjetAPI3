import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cours} from "../../entities/cours.entities";
import {CoursService} from "../../services/cours.service";
import {FormGroup} from "@angular/forms";
import {Enseignant} from "../../entities/enseignant.entities";
import {EnseignantService} from "../../services/enseignant.service";
import {SalleService} from "../../services/salle.service";
import {Salle} from "../../entities/salle.entities";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Infos} from "../../entities/infos.entities";

@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.css']
})
export class EnseignantsComponent{

}
