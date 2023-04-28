import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancerRechercheComponent } from './lancer-recherche/lancer-recherche.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { RegisterRecruiterComponent } from './register-recruiter/register-recruiter.component';

const routes: Routes = [
  {path:'lancerRecherche', component:LancerRechercheComponent},
  {path:'entreprise', component:EntrepriseComponent},
  {path: 'register-recruiter', component:RegisterRecruiterComponent},
  {path :'**', component:LancerRechercheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
