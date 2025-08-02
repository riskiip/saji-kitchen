import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <nav>
      <div class="nav__header">
        <div class="nav__logo">
          <a href="#" class="logo">
            <!-- <img src="assets/logo.png" alt="logo" /> -->
            <span>Saji Kitchen</span>
          </a>
        </div>
        <div class="nav__menu__btn" id="menu-btn">
          <i class="ri-menu-line"></i>
        </div>
      </div>
      <ul class="nav__links" id="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#service">Our Services</a></li>
        <li><a href="#menu">Our Menu</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li>
          <button class="btn">
            <span><i class="ri-login-box-line"></i></span>
            Login
          </button>
        </li>
      </ul>
      <div class="nav__btns">
        <button class="btn">
          <span><i class="ri-login-box-line"></i></span>
          Login
        </button>
      </div>
    </nav>
  `,
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
