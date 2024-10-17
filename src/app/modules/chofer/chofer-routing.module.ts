import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaChoferComponent } from '../../components/alta-chofer/alta-chofer.component';
import { ListaChoferesComponent } from '../../components/lista-choferes/lista-choferes.component';

const routes: Routes = [
  {
    path: 'alta',
    component: AltaChoferComponent,
  },
  {
    path: 'lista',
    component: ListaChoferesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoferRoutingModule {}
