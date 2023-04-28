import { Component, Input } from '@angular/core';
import { Publication } from '../publication';
import { HandleDbService } from '../handle-db.service';

@Component({
  selector: 'app-card-publication',
  templateUrl: './card-publication.component.html',
  styleUrls: ['./card-publication.component.css']
})
export class CardPublicationComponent {

  @Input() publication:Publication;
  @Input() isActive: boolean;

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


}
