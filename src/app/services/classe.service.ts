import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Classe} from "../entities/classe.entities";

@Injectable({providedIn:"root"})
export class ClasseService {
  private host = environment.host;
  constructor(private httpClasse:HttpClient) {
  }

  getClasse(idclasse:number):Observable<Classe>{
    return this.httpClasse.get<Classe>(this.host+"/classes/"+idclasse);
  }
}
