import { Component } from '@angular/core';
import { Employeur } from '../employeur';

@Component({
  selector: 'app-register-recruiter',
  templateUrl: './register-recruiter.component.html',
  styles: [
  ]
})
export class RegisterRecruiterComponent {

  recruiter : Employeur = new Employeur();
  IdNbrEmploye: Number;
  IdIsManager: Number;
  IdHowDiscover: Number;
  optionsNbrEmpl = [
    {id : 1, name: 'Sélectionnez une option...'}, 
    {id : 2, name: 'De 1 à 49'},
    {id : 3, name: 'De 50 à 149'},
    {id : 4, name: 'De 150 à 249'},
    {id : 5, name: 'De 250 à 499'},
    {id : 6, name: 'De 500 à 749'},
    {id : 7, name: 'De 750 à 999'},
    {id : 8, name: 'Plus de 1000'},
  ];
  optionsIsManager = [
    {id : 1, name : 'Sélectionnez une option..'},
    {id : 2, name : 'Oui'},
    {id : 3, name : 'Non'},
  ]
  optionsHowDiscover = [
    {id : 1, name : 'Sélectionnez une option..'},
    {id : 2, name : "Panneau d'affichage"},
    {id : 3, name : "Vidéo en ligne"},
    {id : 4, name : "Réseaux sociaux"},
    {id : 5, name : "Radio (AM/FM)"},
    {id : 6, name : "Télévision"},
    {id : 7, name : "Streaming audio (par exemple : spotify, Pandora, etc.)"},
    {id : 8, name : "Email"},
    {id : 9, name : "Journal"}, 
    {id : 10, name : "Podcast"},
    {id : 11, name : "Bouche à oreille"},
    {id : 12, name : "Moteur de recherche (par exemple : Google, Bing, Yahoo)"},
    {id : 13, name : "Autre"},

  ]

  constructor(){
    this.IdNbrEmploye = this.optionsNbrEmpl[0].id;
    this.IdIsManager = this.optionsIsManager[0].id;
    this.IdHowDiscover = this.optionsHowDiscover[0].id;
  }
  
  
}
