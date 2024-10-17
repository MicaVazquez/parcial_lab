import { Routes } from '@angular/router';
import {
  canActivate,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';

export const routes: Routes = [
  {
    path: 'chofer',
    loadChildren: () =>
      import('./modules/chofer/chofer.module').then((m) => m.ChoferModule),
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (m) => m.LoginComponent
      ),
    ...canActivate(() => redirectLoggedInTo(['/**'])),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/bienvenida/bienvenida.component').then(
        (m) => m.BienvenidaComponent
      ),
  },
];
