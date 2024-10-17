import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaPaisesComponent } from '../../components/tabla-paises/tabla-paises.component';
import { ChoferRoutingModule } from './chofer-routing.module';
import { AltaChoferComponent } from '../../components/alta-chofer/alta-chofer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AltaChoferComponent, TablaPaisesComponent],
  imports: [
    CommonModule,
    ChoferRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ChoferModule {}
