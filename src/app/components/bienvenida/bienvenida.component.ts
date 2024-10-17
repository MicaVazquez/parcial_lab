import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [NgIf],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css',
})
export class BienvenidaComponent {
  userData: any;
  constructor(private githubService: GithubService) {}
  ngOnInit(): void {
    this.githubService.getUserData().subscribe((data) => {
      this.userData = data;
    });
  }
}
