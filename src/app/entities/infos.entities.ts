import {Salle} from "./salle.entities";
import {Enseignant} from "./enseignant.entities";
import {Classe} from "./classe.entities";
import {Cours} from "./cours.entities";

export interface Infos{
  nbreheures:number;
  salle:Salle;
  enseignant:Enseignant;
  classe:Classe;
  cours:Cours;
}
