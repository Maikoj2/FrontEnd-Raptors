import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackendModule } from './backend/backend.module';
import { FrontendModule } from './frontend/frontend.module';
import { NoPageNoFoundComponent } from './no-page-no-found/no-page-no-found.component';
import { LoginComponent } from './login/login.component';
import { APP_ROUTES } from './app.routes';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    NoPageNoFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FrontendModule,
    BackendModule,
    APP_ROUTES,
    HttpClientModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
