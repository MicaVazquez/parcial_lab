import { Component } from '@angular/core';
import { Chofer } from '../../models/chofer';
import { Input, Output, EventEmitter } from '@angular/core';
import { ChoferService } from '../../services/chofer.service';
@Component({
  selector: 'app-tabla-choferes',
  // standalone: true,
  // imports: [],
  templateUrl: './tabla-choferes.component.html',
  styleUrl: './tabla-choferes.component.css',
})
export class TablaChoferesComponent {
  choferes: Array<Chofer> = [];
  @Input() mostrarSeleccionar: boolean = false;
  @Output() eventChoferSeleccionado = new EventEmitter<Chofer>();

  constructor(private choferService: ChoferService) {}

  async ngOnInit() {
    this.choferService.getChoferes().then((respuesta) => {
      this.choferes = respuesta;
    });
  }

  seleccionar(chofer: Chofer) {
    this.eventChoferSeleccionado.emit(chofer);
  }
}
