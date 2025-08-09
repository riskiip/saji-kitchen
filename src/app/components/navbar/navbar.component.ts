import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  // Properti untuk menu hamburger
  isMenuOpen: boolean = false;

  // Properti BARU untuk mendeteksi scroll
  isScrolled: boolean = false;

  constructor() { }

  // Fungsi untuk menu hamburger
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Fungsi BARU yang akan berjalan setiap kali user scroll
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Cek jika posisi scroll vertikal lebih besar dari 0
    this.isScrolled = window.scrollY > 0;
  }
}
