import {Component, HostListener} from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, HomeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 0;
  }
}
