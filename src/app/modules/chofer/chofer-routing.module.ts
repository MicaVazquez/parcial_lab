import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaChoferComponent } from '../../components/alta-chofer/alta-chofer.component';

const routes: Routes = [
  {
    path: 'alta',
    component: AltaChoferComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoferRoutingModule {}
