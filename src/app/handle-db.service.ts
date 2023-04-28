import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Publication } from './publication';
import { Type } from './type';
import { Horaires_Roulements } from './horaires&roulements';
import { Observable} from 'rxjs';
import {find} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HandleDbService {
  publicationsRef : AngularFireList<Publication>;
  typeRef: AngularFireList<Type>;
  hrRef: AngularFireList<Horaires_Roulements>;

  types : Type[];
  hrs : Horaires_Roulements[];

  constructor(
    private db: AngularFireDatabase
  ) {
    this.publicationsRef = db.list('publications');
    this.typeRef = db.list('types');
    this.hrRef = db.list('horaires_roulements');

    this.getAllTypes().pipe(
    ).subscribe(types =>{
      this.types = types;
    });

    this.getAllHrs().pipe(
      ).subscribe(hrs =>{
        this.hrs = hrs;
      });
  }

  private restart(){
    var type = new Type();
    var hr = new Horaires_Roulements();
    const dtype = [{'id':0, 'name': 'CDI'}, {'id':1, 'name': 'CDD'}, {'id':2, 'name': 'Alternance'}, {'id':3, 'name': 'Stage'}, {'id':4, 'name': 'Job Edudiant'}];
    const dhr = [{'id':0, 'name': 'Repos le weekend'}, {'id':1, 'name': 'Temps plein'}, {'id':2, 'name': 'Temps partiel'}, {'id':3, 'name': 'Horaire Flexible'}, {'id':4, 'name': 'Horaire Variable'}, {'id':5, 'name': 'Horaire de jour'}, {'id':6, 'name': 'Horaire de soir'}, {'id':7, 'name': 'Horaire de nuit'}, {'id':8, 'name': 'Fin de semaine'}, {'id':9, 'name': 'Horaire en rotation'}, {'id':10, 'name': 'Temps partiel flexible'}, {'id':11, 'name': 'Temps partiel fixe'}, {'id':12, 'name': 'Horaire compressé'}, {'id':13, 'name': 'Horaire à la carte'}];

    dtype.forEach(element => {
      type.id = element.id;
      type.name = element.name;
      this.typeRef.push(type);
    });

    dhr.forEach(element => {
      hr.id = element.id;
      hr.name = element.name;
      this.hrRef.push(hr);
    });
    

  }

  getAllTypes() : Observable<Type[]>{
    var types : Observable<Type[]>
    types = this.typeRef.valueChanges();
    return types;
  }

  getAllHrs() : Observable<Horaires_Roulements[]>{
    var hrs : Observable<Horaires_Roulements[]>
    hrs = this.hrRef.valueChanges();
    return hrs;
  }

  getAllPublications() : Observable<Publication[]>{
    var publications : Observable<Publication[]>
    publications = this.publicationsRef.valueChanges();
    return publications;
  }

  getNameType(id : Number):string | undefined{
    return (this.types.find( type => type.id == id))?.name
  }

  getNameHr(id : Number) : string | undefined{
    return (this.hrs.find( hr => hr.id == id))?.name
  }

  addPublication(){
    var newPublication;
    newPublication = new Publication();
    this.publicationsRef.push(newPublication);
  }
}
