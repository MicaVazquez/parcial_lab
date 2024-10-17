import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'chofer',
    loadChildren: () =>
      import('./modules/chofer/chofer.module').then((m) => m.ChoferModule),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/bienvenida/bienvenida.component').then(
        (m) => m.BienvenidaComponent
      ),
  },
];
