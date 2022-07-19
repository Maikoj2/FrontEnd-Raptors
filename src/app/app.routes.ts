
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { NoPageNoFoundComponent } from './no-page-no-found/no-page-no-found.component';

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./frontend/frontend.module')
      .then(m => m.FrontendModule),
  },
  {
    path: 'backend',
    loadChildren: () => import('./backend/backend.module')
      .then(m => m.BackendModule),
  },

  { path: 'login', component: LoginComponent },
  { path: '**', component: NoPageNoFoundComponent },

];



export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
