import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cours} from "../entities/cours.entities";
import {Enseignant} from "../entities/enseignant.entities";
import {Salle} from "../entities/salle.entities";
import {Infos} from "../entities/infos.entities";

@Injectable({providedIn:"root"})
export class EnseignantService{
  private host = environment.host;
  constructor(private http:HttpClient) {
  }

  getEnseignant(idenseignant:number):Observable<Enseignant>{
    return this.http.get<Enseignant>(this.host+"/enseignants/"+idenseignant);
  }

  allEnseignants():Observable<Enseignant[]>{
    return this.http.get<Enseignant[]>(this.host+"/enseignants/all");
  }

  searchEnseignantUnique(matricule:string):Observable<Enseignant>{
    return this.http.get<Enseignant>(this.host+"/enseignants/matricule="+matricule);
  }
  searchEnseignantNom(nom:string):Observable<Enseignant[]>{
    return this.http.get<Enseignant[]>(this.host+"/enseignants/nom="+nom);
  }

  deleteEnseignant(enseignant:Enseignant):Observable<Enseignant>{
    return this.http.delete<Enseignant>(this.host+"/enseignants/"+enseignant.idenseignant);
  }
  save(enseignant:Enseignant):Observable<Enseignant>{
    return this.http.post<Enseignant>(this.host+"/enseignants/",enseignant);
  }
  updateEnseignant(enseignant:Enseignant):Observable<Enseignant>{
    return this.http.put<Enseignant>(this.host+"/enseignants/"+enseignant.idenseignant,enseignant);
  }
  updateSalle(enseignant:Enseignant,salle:Salle):Observable<Enseignant>{
    return this.http.put<Enseignant>(this.host+"/enseignants/idens="+enseignant.idenseignant+"/idsal="+salle.idsalle,enseignant);
  }

  getSalleEnseignant(enseignant:Enseignant):Observable<Salle>{
    return this.http.get<Salle>(this.host+"/enseignants/salle/idenseignant="+enseignant.idenseignant);
  }

  getInfosEnseignant(enseignant:Enseignant):Observable<Infos[]>{
    return this.http.get<Infos[]>(this.host+"/enseignants/infos/idens="+enseignant.idenseignant);
  }
}
