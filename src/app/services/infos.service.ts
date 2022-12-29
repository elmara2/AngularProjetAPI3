import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Salle} from "../entities/salle.entities";
import {Enseignant} from "../entities/enseignant.entities";
import {Infos} from "../entities/infos.entities";

@Injectable({providedIn:"root"})
export class InfosService{
  private host = environment.host;
  constructor(private http:HttpClient) {
  }

  getInfos(idclasse:number,idcours:number):Observable<Infos>{
    return this.http.get<Infos>(this.host+"/infos/idcl="+idclasse+"/idcrs="+idcours);
  }

  deleteInfos(infos:Infos):Observable<Infos>{
    return this.http.delete<Infos>(this.host+"/infos/idcl="+infos.classe.idclasse+"/idcrs="+infos.cours.idcours);
  }
  save(infos:Infos):Observable<Infos>{
    return this.http.post<Infos>(this.host+"/infos/",infos);
  }
  updateInfos(infos:Infos):Observable<Infos>{
    return this.http.put<Infos>(this.host+"/infos/idcl="+infos.classe.idclasse+"/idcrs="+infos.cours.idcours,infos);
  }

  getInfosSalle(sal:Salle):Observable<Infos[]>{
    return this.http.get<Infos[]>(this.host+"/salles/infos/idsalle="+sal.idsalle);
  }

}
