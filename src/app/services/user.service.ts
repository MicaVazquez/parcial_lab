import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  usuarios: any[] = [];
  constructor(private firestore: AngularFirestore) {}

  obtenerUsuarios(): Observable<any[]> {
    return this.firestore.collection<any>('usuarios').valueChanges();
  }

  agregarUsuario(usuario: any) {
    this.firestore
      .collection('usuarios')
      .add(usuario)
      .then(() => {
        console.log('Usuario agregado correctamente');
      })
      .catch((error) => {
        console.error('Error al agregar usuario:', error);
      });
  }
}
