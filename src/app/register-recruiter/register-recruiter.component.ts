import { Component } from '@angular/core';
import { Employeur } from '../employeur';

@Component({
  selector: 'app-register-recruiter',
  templateUrl: './register-recruiter.component.html',
  styles: [
  ]
})
export class RegisterRecruiterComponent {

  recruiter : Employeur = new Employeur()
  
}
