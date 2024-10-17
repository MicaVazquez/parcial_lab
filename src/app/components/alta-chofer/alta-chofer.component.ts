import { Component } from '@angular/core';
import { ChoferService } from '../../services/chofer.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Pais } from '../../models/pais';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-alta-chofer',
  // standalone: true,
  // imports: [],
  templateUrl: './alta-chofer.component.html',
  styleUrl: './alta-chofer.component.css',
})
export class AltaChoferComponent {
  pais: Pais = new Pais();
  formChofer!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private choferService: ChoferService
  ) {}

  ngOnInit(): void {
    this.formChofer = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]+$')]],
      dni: [
        '',
        [Validators.required, Validators.minLength(8), Validators.maxLength(8)],
      ],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(50)]],
      licencia: ['', [Validators.required, Validators.minLength(7)]],
      licenciaProfesional: [false],
      pais: ['', Validators.required],
    });
  }

  registrarChofer() {
    let data = {
      dni: this.formChofer.value.dni,
      nombre: this.formChofer.value.nombre,
      edad: this.formChofer.value.edad,
      nroLicencia: this.formChofer.value.licencia,
      licenciaProfesional: this.formChofer.value.licenciaProfesional,
      nacionalidad: JSON.stringify(this.pais),
    };

    this.choferService
      .agregarChofer(data)
      .then((respuesta) => {
        Swal.fire('', 'Chofer guardado de manera correcta', 'success');
      })
      .catch((error) => {
        Swal.fire('', 'Error al guardar el chofer', 'error');
        console.log(error);
      });

    this.formChofer.reset();
  }
  cargarPais(pais: Pais) {
    this.pais = pais;
    if (pais.nombre) {
      this.formChofer.get('pais')?.setValue(pais.nombre);
    }
    console.log(this.pais);
  }
}
