import { Component, Input, OnInit } from '@angular/core';
import { Publication } from '../publication';
import { HandleDbService } from '../handle-db.service';

@Component({
  selector: 'app-view-offer',
  templateUrl: './view-offer.component.html',
  styleUrls: ['./view-offer.component.css']
})
export class ViewOfferComponent implements OnInit{
  @Input() publication: Publication;

  
  rangeStar: number[];
  constructor(
    private serviceDB : HandleDbService
  ){
    
  }

  getNameType(id : Number) : String | undefined{
    return this.serviceDB.getNameType(id);
  }

  getNameHr(id : Number) : String | undefined{
    return this.serviceDB.getNameHr(id);
  }

  ngOnInit(): void {
    this.rangeStar = Array.from({ length: Math.floor(this.publication.star)}, (_, index) => index+1);
  }

  haveHalfStar() : boolean{
    return parseInt(this.publication.star.toFixed(2).split('.')[1])>=0.5
  }

  rangeHiddenStar(): number[]{
    const num = 5-this.rangeStar.length -(this.haveHalfStar()?1:0);
    return Array.from({ length: num}, (_, index) => index+1);
  }
}
