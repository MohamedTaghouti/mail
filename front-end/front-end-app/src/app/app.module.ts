import  { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import {UserService} from './user.service';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {AuthenticationService} from './authentication.service';
import {CanActivateAuthGuard} from './can-activate.authguard';
import {TRANSLATION_PROVIDERS, TranslateService, TranslatePipe} from "./translate";



const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [CanActivateAuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    BodyComponent,
    HomeComponent,
    LoginComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [UserService, AuthenticationService, TRANSLATION_PROVIDERS, TranslateService, CanActivateAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {

}
