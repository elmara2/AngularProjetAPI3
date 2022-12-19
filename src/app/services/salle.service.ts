import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cours} from "../entities/cours.entities";
import {Classe} from "../entities/classe.entities";
import {Injectable} from "@angular/core";
import {Infos} from "../entities/infos.entities";
import {Salle} from "../entities/salle.entities";
import {Enseignant} from "../entities/enseignant.entities";

@Injectable({providedIn:"root"})
export class SalleService{
  private host = environment.host;
  constructor(private http:HttpClient) {
  }

  getSalle(idsalle:number):Observable<Salle>{
    return this.http.get<Salle>(this.host+"/salles/"+idsalle);
  }
  searchSalleUnique(sigle:string):Observable<Salle>{
    return this.http.get<Salle>(this.host+"/salles/sigle="+sigle);
  }
  searchSalleCapacity(capacite:number):Observable<Salle[]>{
    return this.http.get<Salle[]>(this.host+"/salles/capacite="+capacite);
  }

  deleteSalle(salle:Salle):Observable<Salle>{
    return this.http.delete<Salle>(this.host+"/salles/"+salle.idsalle);
  }
  save(salle:Salle):Observable<Salle>{
    return this.http.post<Salle>(this.host+"/salles/",salle);
  }
  updateSalle(salle:Salle):Observable<Salle>{
    return this.http.put<Salle>(this.host+"/salles/"+salle.idsalle,salle);
  }

    listEnseignant(salle: Salle):Observable<Enseignant[]>{
    return this.http.get<Enseignant[]>(this.host+"/salles/enseignants/idsalle="+salle.idsalle);
  }

  addEnseignant(ens:Enseignant,sal:Salle):Observable<void>{
    return this.http.put<void>(this.host+"/salles/idsalle="+sal.idsalle+"/idenseignant="+ens.idenseignant,ens);
  }
  deleteEnseignant(ens:Enseignant,sal:Salle):Observable<void>{
    return this.http.delete<void>(this.host+"/salles/idsalle="+sal.idsalle+"/idenseignant="+ens.idenseignant);
  }

  getInfosSalle(sal:Salle):Observable<Infos[]>{
    return this.http.get<Infos[]>(this.host+"/salles/infos/idsalle="+sal.idsalle);
  }

}
