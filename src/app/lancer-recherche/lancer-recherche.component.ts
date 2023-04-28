import { Component, OnInit } from '@angular/core';
import { Publication } from '../publication';
import { Observable } from 'rxjs';
import { HandleDbService } from '../handle-db.service';

@Component({
  selector: 'app-lancer-recherche',
  templateUrl: './lancer-recherche.component.html',
  styleUrls:['lancer-recherche.component.css']
})
export class LancerRechercheComponent implements OnInit{

  publications : Observable<Publication[]>;
  
  activeId: number = 1;
  viewOffer: boolean =true;

  constructor(
    private serviceDB : HandleDbService
  ){
    this.publications = serviceDB.getAllPublications();
  }

  ngOnInit(): void {
    
  }

  isActiveView(id: number) : boolean{
    return this.activeId == id;
  }

  active(id: number){
    this.activeId = id;
  }

  setViewOffer( val : boolean){
    this.viewOffer = val;
  }

  
}
 