import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaPaisesComponent } from '../../components/tabla-paises/tabla-paises.component';
import { ChoferRoutingModule } from './chofer-routing.module';
import { AltaChoferComponent } from '../../components/alta-chofer/alta-chofer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaChoferesComponent } from '../../components/lista-choferes/lista-choferes.component';
import { TablaChoferesComponent } from '../../components/tabla-choferes/tabla-choferes.component';
import { DetalleChoferComponent } from '../../components/detalle-chofer/detalle-chofer.component';
import { DetallePaisComponent } from '../../components/detalle-pais/detalle-pais.component';

@NgModule({
  declarations: [
    AltaChoferComponent,
    TablaPaisesComponent,
    ListaChoferesComponent,
    TablaChoferesComponent,
    DetalleChoferComponent,
    DetallePaisComponent,
  ],
  imports: [
    CommonModule,
    ChoferRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ChoferModule {}
