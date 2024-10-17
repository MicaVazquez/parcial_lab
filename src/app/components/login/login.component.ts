import { Component } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormGroup,
} from '@angular/forms';
import { Usuario } from '../../interfaces/usuario';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;
  userSubscription!: Subscription;
  usuarios: any[] = [];

  ngOnInit() {
    this.userSubscription = this.userSrv.obtenerUsuarios().subscribe(
      (usuarios) => {
        this.usuarios = usuarios;
        console.log(usuarios);
      },
      (error) => {
        console.error('Error al cargar usuarios:', error);
      }
    );
  }

  constructor(
    public authSrv: AuthService,
    public route: Router,
    public formBuilder: FormBuilder,
    public userSrv: UserService
  ) {
    this.loginForm = this.formBuilder.group({
      correo: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'),
        ],
      ],

      contraseña: ['', [Validators.required]],
    });
  }
  get emailControl() {
    return this.loginForm.get('correo');
  }
  get passControl() {
    return this.loginForm.get('contraseña');
  }
  iniciarSesion() {
    this.authSrv
      .login(this.loginForm.value.correo, this.loginForm.value.contraseña)
      .then((userCredential) => {
        if (userCredential) {
          const usuario = this.usuarios.find(
            (usuario) =>
              usuario.email === this.loginForm.value.correo &&
              usuario.pass === this.loginForm.value.contraseña
          );
          if (usuario) {
            let user = {
              email: usuario.email,
              perfil: usuario.perfil,
            };

            localStorage.setItem('user', JSON.stringify(user));

            this.route.navigate(['/bienvenida']);
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error al iniciar sesión',
              text: 'Credenciales incorrectas. Por favor, inténtelo de nuevo.',
              heightAuto: false,
            });
          }
        }
      })
      .catch((error) => {
        console.log('Error al iniciar sesión:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error al iniciar sesión',
          text: 'Ha ocurrido un error. Por favor, inténtelo de nuevo más tarde.',
          heightAuto: false,
        });
      });
  }

  establecerCredenciales(correo: string, contraseña: string) {
    this.loginForm.patchValue({
      correo: correo,
      contraseña: contraseña,
    });
  }
}
