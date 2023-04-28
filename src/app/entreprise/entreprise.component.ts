import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent {


  constructor(
    private router : Router
  ){}

  publier(){
    this.router.navigate(['register-recruiter']);
  }
}
