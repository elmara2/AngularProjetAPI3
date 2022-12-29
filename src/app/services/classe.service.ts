import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Classe} from "../entities/classe.entities";
import {Enseignant} from "../entities/enseignant.entities";
import {Salle} from "../entities/salle.entities";
import {Infos} from "../entities/infos.entities";

@Injectable({providedIn:"root"})
export class ClasseService {
  private host = environment.host;
  constructor(private http:HttpClient) {
  }

  getClasse(idclasse:number):Observable<Classe>{
    return this.http.get<Classe>(this.host+"/classes/"+idclasse);
  }

  allClasses():Observable<Classe[]>{
    return this.http.get<Classe[]>(this.host+"/classes/all");
  }

  searchClasseUnique(sigle:string):Observable<Classe>{
    return this.http.get<Classe>(this.host+"/classes/sigle="+sigle);
  }
  searchClasseSpecialite(specialite:string):Observable<Classe[]>{
    return this.http.get<Classe[]>(this.host+"/classes/specialite="+specialite);
  }

  deleteClasse(classe:Classe):Observable<Classe>{
    return this.http.delete<Classe>(this.host+"/classes/"+classe.idclasse);
  }
  save(classe:Classe):Observable<Classe>{
    return this.http.post<Classe>(this.host+"/classes/",classe);
  }
  updateClasse(classe:Classe):Observable<Classe>{
    return this.http.put<Classe>(this.host+"/classes/"+classe.idclasse,classe);
  }

  getInfosClasse(classe:Classe):Observable<Infos[]>{
    return this.http.get<Infos[]>(this.host+"/classes/infos/idclasse="+classe.idclasse);
  }
}
