import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  linkRight : string[]  = ['Lancer la recherche', 'Avis sur les entreprises', 'Estimation de salaire'];
  linkLeft : string[]  = ['Télécharger votre CV', 'Connexion', 'Entreprises/Publier une annonce'];
  current : number = 0;


  constructor(
    private router: Router
  ){}

  selected(link : string){
    if(this.linkRight.includes(link)){
      this.current = this.linkRight.indexOf(link);
    }
    else{
      this.current = this.linkLeft.indexOf(link) + this.linkRight.length;
    }
    this.update();
  }

  isActive(link : string) : boolean{
    if(this.current<this.linkRight.length)
      return this.linkRight[this.current] == link;
    return this.linkLeft[this.current - this.linkRight.length] == link;
  }

  isntNavLink(link :string) : boolean{
    if(link == this.linkLeft[1])
      return false
    return true 
  }

  update():void{
    switch(this.current){
      case 0:
        this.router.navigate(['lancerRecherche']);
        break;
      case 5:
        this.router.navigate(['entreprise']);
        break;
    }
  }
}
