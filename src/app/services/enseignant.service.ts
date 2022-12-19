import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cours} from "../entities/cours.entities";
import {Enseignant} from "../entities/enseignant.entities";

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
}
