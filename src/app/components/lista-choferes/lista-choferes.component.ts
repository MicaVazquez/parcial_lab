import { Component } from '@angular/core';
import { Chofer } from '../../models/chofer';
import { Pais } from '../../models/pais';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-choferes',
  // standalone: true,
  // imports: [],
  templateUrl: './lista-choferes.component.html',
  styleUrl: './lista-choferes.component.css',
})
export class ListaChoferesComponent {
  choferSeleccionado: Chofer = new Chofer();
  paisSeleccionado: Pais = new Pais();

  constructor(private router: Router) {}

  mostrar(event: any) {
    this.choferSeleccionado = event;

    this.paisSeleccionado = event.pais;
  }
}
