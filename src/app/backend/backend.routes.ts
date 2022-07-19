import { RouterModule, Routes } from "@angular/router";
import { BackendComponent } from './backend.component';
import { PagesComponent } from './pages/pages.component';


const backendRoutes: Routes = [

    { path: '',
    component: BackendComponent,
    children: [
         { path: 'dashboard', component: PagesComponent },
         { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        
    ],}

];




export const BACKEND_ROUTES = RouterModule.forChild( backendRoutes);

