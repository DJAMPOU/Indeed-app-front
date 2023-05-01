import { Injectable } from '@angular/core';
import { Publication } from './publication';
import { Type } from './type';
import { Horaires_Roulements } from './horaires&roulements';
import { Observable, map} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HandleDbService {

  backHost = 'http://localhost:8000/';
  types : Type[];
  hrs : Horaires_Roulements[];

  constructor(
    private http : HttpClient
  ) {

    
    //on recupere tout les horaires de roulement
    this.getAllHrs()
    .subscribe(hrs =>{
        this.hrs = hrs.map(
          data=> new Horaires_Roulements(data.id, data.name)
        );
      });

    //on recupere tout les types  
    this.getAllTypes()
    .subscribe(
      (datas) =>{
        this.types = datas.map(
          data=> new Type(data.id, data.name)
        )
      }
    );
  }

  getAllTypes() : Observable<any[]>{
    const url = this.backHost + 'api/type/';
    return this.http.get<any[]>(url)
  }

  getAllHrs() : Observable<any[]>{
    const url = this.backHost + 'api/hr/';
    return this.http.get<any[]>(url)
  }

  getAllDetailPublication() : Observable<any[]>{
    const url = this.backHost + 'api/publication/';
    return this.http.get<any[]>(url);
  }

  getAllPubliType() : Observable<any[]>{
    const url = this.backHost + 'api/publi_type/';
    return this.http.get<any[]>(url);
  }

  getAllPubliHR() : Observable<any[]>{
    const url = this.backHost + 'api/publi_hr/';
    return this.http.get<any[]>(url);
  }

  getAllPublications() :Publication[]{
    var publications : Publication[] = [];
    var details : any[] = [];
    var publiTypes : any[] = [];
    var publiHR : any[] = [];

    this.getAllDetailPublication()
    .subscribe(
      datas=>{
        details = datas;
        this.getAllPubliType()
        .subscribe(
          datas => {
            publiTypes = datas;
            this.getAllPubliHR()
            .subscribe(
              datas =>{
                publiHR = datas;
                
                details.map(
                  detail=>{
                    publications.push(new Publication(detail.id, detail.titre, detail.entrepriseName, detail.mail, detail.emplacement, this.getTypeIds(detail.id, publiTypes), this.getHRIds(detail.id, publiHR), detail.description, detail.signaler, detail.star, detail.manyOffer, detail.haveHerSite, detail.salaire, detail.date))
                  }
                )
              })
          })
    })

    return publications
  }

  getTypeIds(publiId : number, publi_type : any[]) : number[]{
    var result : number[] = [];
    publi_type.map(
      el=>{
        el.id_publi.id == publiId?result.push(el.id_type.id):0
      }
    )
    return result;
  }

  getHRIds(publiId : number, publi_hr : any[]) : number[]{
    var result : number[] = [];
    publi_hr.map(
      el=>{
        el.id_publi.id == publiId?result.push(el.id_hr.id):0
      }
    )
    return result;
  }

  getNameType(id : Number):string | undefined{
    return (this.types.find( type => type.id == id))?.name
  }

  getNameHr(id : Number) : string | undefined{
    return (this.hrs.find( hr => hr.id == id))?.name
  }

  /*addPublication(){
    var newPublication;
    newPublication = new Publication();
  }*/
}
