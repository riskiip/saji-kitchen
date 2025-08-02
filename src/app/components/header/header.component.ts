import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, HomeComponent],
  template: `
    <header>
      <app-navbar />
      <app-home />
    </header>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
