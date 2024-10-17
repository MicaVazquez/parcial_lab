import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../models/pais';
@Component({
  selector: 'app-tabla-paises',
  // standalone: true,
  // imports: [],
  templateUrl: './tabla-paises.component.html',
  styleUrl: './tabla-paises.component.css',
})
export class TablaPaisesComponent {
  @Input() paises: Pais[] = [];
  @Input() mostrarSeleccionar: boolean = true;
  @Input() cargarPaises: boolean = true;
  @Output() eventPaisSeleccionado = new EventEmitter<Pais>();

  constructor(private paisesService: PaisService, private router: Router) {}

  async ngOnInit() {
    if (this.cargarPaises) {
      this.paisesService.TraerPaises().then((respuesta) => {
        this.paises = respuesta;
      });
    }
  }

  seleccionar(pais: Pais) {
    this.router.navigate(['chofer/alta']);
    //console.log(pais);
    this.eventPaisSeleccionado.emit(pais);
  }
}
