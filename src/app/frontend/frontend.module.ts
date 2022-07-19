import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendComponent } from './frontend.component';
import { SharedComponent } from './shared/shared.component';
import { PagesComponent } from './pages/pages.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { FRONTEND_ROUTES } from './frontend.routes';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GaleryComponent } from './pages/galery/galery.component';
import { BrowserModule } from '@angular/platform-browser';
import { TitulosContainerComponent } from './componentes/titulos-container/titulos-container.component';



@NgModule({
  declarations: [
    FrontendComponent,
    SharedComponent,
    PagesComponent,
    HeaderComponent,
    SidebarComponent,
    InicioComponent,
    GaleryComponent,
    TitulosContainerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FRONTEND_ROUTES
  ],
  exports:[
  ]
})
export class FrontendModule { }
