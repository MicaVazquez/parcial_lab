import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private authF: AngularFireAuth) {}
  userCredentials: any = null;

  async register(email: string, password: string) {
    const response = await this.authF.createUserWithEmailAndPassword(
      email,
      password
    );
    return response.user;
  }

  login(email: string, password: string) {
    console.log(email, password);
    return this.authF.signInWithEmailAndPassword(email, password);
  }

  logout() {
    localStorage.removeItem('user');
    return this.authF.signOut();
  }

  obtenerEstadoUsuario() {
    return this.authF.authState;
  }

  obtenerDatosUsuario() {
    return this.authF.currentUser;
  }
}
