import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LancerRechercheComponent } from './lancer-recherche/lancer-recherche.component';
import { CardPublicationComponent } from './card-publication/card-publication.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewOfferComponent } from './view-offer/view-offer.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { RegisterRecruiterComponent } from './register-recruiter/register-recruiter.component';
import { CreatePulicationComponent } from './create-pulication/create-pulication.component';


const environment = {
  production : false,
  firebaseConfig: {
    apiKey: "AIzaSyBi8jcUTkmneTsDmXYIcVAvp8JbuwHiVLc",
    authDomain: "ng-indeed-app.firebaseapp.com",
    databaseURL: "https://ng-indeed-app-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ng-indeed-app",
    storageBucket: "ng-indeed-app.appspot.com",
    messagingSenderId: "775704571594",
    appId: "1:775704571594:web:e28ef2dab031596614ce33",
    measurementId: "G-5EJN2JF6R3"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LancerRechercheComponent,
    CardPublicationComponent,
    ViewOfferComponent,
    EntrepriseComponent,
    RegisterRecruiterComponent,
    CreatePulicationComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
