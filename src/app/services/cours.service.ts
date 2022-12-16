import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cours} from "../entities/cours.entities";
import {Classe} from "../entities/classe.entities";
import {Injectable} from "@angular/core";

@Injectable({providedIn:"root"})
export class CoursService{
  private host = environment.host;
  constructor(private http:HttpClient) {
  }

  getCours(idcours:number):Observable<Cours>{
    return this.http.get<Cours>(this.host+"/cours/"+idcours);
  }
  searchCoursUnique(code:string):Observable<Cours>{
    return this.http.get<Cours>(this.host+"/cours/code="+code);
  }
  searchCours(intitule:string):Observable<Cours[]>{
    return this.http.get<Cours[]>(this.host+"/cours/intitule="+intitule);
  }

  deleteCours(cours:Cours):Observable<Cours>{
    return this.http.delete<Cours>(this.host+"/cours/"+cours.idcours);
  }
  save(cours:Cours):Observable<Cours>{
    return this.http.post<Cours>(this.host+"/cours/",cours);
  }
  updateCours(cours:Cours):Observable<Cours>{
    return this.http.put<Cours>(this.host+"/cours/"+cours.idcours,cours);
  }
}
