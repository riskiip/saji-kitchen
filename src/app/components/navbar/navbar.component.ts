import {Component, HostListener} from '@angular/core';
import {ConstantApi} from "../../constants/constant-api";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  api_wa: string = ConstantApi.API_WA
  // Properti untuk menu hamburger
  isMenuOpen: boolean = false;

  // Properti BARU untuk mendeteksi scroll
  isScrolled: boolean = false;

  constructor() {
  }

  // Fungsi untuk menu hamburger
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  // Fungsi BARU yang akan berjalan setiap kali user scroll
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Cek jika posisi scroll vertikal lebih besar dari 0
    this.isScrolled = window.scrollY > 0;
  }

  orderWhatsapp() {
    window.open(this.api_wa, '_blank');
  }
}
