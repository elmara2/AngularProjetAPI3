import {Salle} from "./salle.entities";

export interface Enseignant {
  idenseignant: number;
  matricule: string;
  nom:string;
  prenom:string;
  tel:string;
  chargesem:string;
  salairemensu:number;
  dateengag:Date;
  salle:Salle;
}
