import { Component } from '@angular/core';
import { Chofer } from '../../models/chofer';
import { Input } from '@angular/core';
@Component({
  selector: 'app-detalle-chofer',
  // standalone: true,
  // imports: [],
  templateUrl: './detalle-chofer.component.html',
  styleUrl: './detalle-chofer.component.css',
})
export class DetalleChoferComponent {
  @Input() chofer?: Chofer;
}
