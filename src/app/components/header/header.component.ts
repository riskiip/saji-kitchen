import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, HomeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
