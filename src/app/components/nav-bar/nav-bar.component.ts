import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  userState: any;
  userData: any;
  constructor(public router: Router, public authsrv: AuthService) {}
  redirigir(path: string) {
    this.router.navigateByUrl(path);
  }
  ngOnInit(): void {
    this.authsrv.obtenerEstadoUsuario().subscribe((state) => {
      this.userState = state;
    });
    this.authsrv.obtenerDatosUsuario = this.userData;
    console.log(this.userData);
  }

  logout() {
    this.authsrv.logout();
    this.router.navigate(['/login']);
  }
}
