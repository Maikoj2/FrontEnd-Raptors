import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendComponent } from './backend.component';
import { SharedComponent } from './shared/shared.component';
import { PagesComponent } from './pages/pages.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BACKEND_ROUTES } from './backend.routes';
import { ScrollService } from './services/scroll.service';
import { SettingsService } from './services/settings.service';
import { SidebarService } from './services/sidebar.service';
import { DashboarComponent } from './pages/dashboar/dashboar.component';






@NgModule({
  declarations: [
    BackendComponent,
    SharedComponent,
    PagesComponent,
    HeaderComponent,
    SidebarComponent,
    DashboarComponent,
  
  ],
  imports: [
    CommonModule,
    BACKEND_ROUTES,
  ],
  exports:[
    BackendComponent,
    SharedComponent,
    PagesComponent,
    HeaderComponent,
    SidebarComponent
  ],
  providers:[
    ScrollService,
    SettingsService,
    SidebarService
  ]
})
export class BackendModule { }
