import { Routes, RouterModule } from '@angular/router';
import { FrontendComponent } from './frontend.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PagesComponent } from '../backend/pages/pages.component';
import { GaleryComponent } from './pages/galery/galery.component';
import { NoPageNoFoundComponent } from '../no-page-no-found/no-page-no-found.component';


const Pagesroutes: Routes = [
    {
        path: '',
        component: FrontendComponent,
        children: [
             { path: 'home', component: InicioComponent },
             { path: 'galeria', component: GaleryComponent },
             { path: '', redirectTo: '/home', pathMatch: 'full'},

            
        ],

    }
];

export const FRONTEND_ROUTES = RouterModule.forChild( Pagesroutes);
