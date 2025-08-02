import { Component } from '@angular/core';

@Component({
  selector: 'app-our-menu',
  standalone: true,
  imports: [],
  template: `
    <section class="section__container menu__container" id="menu">
      <p class="section__subheader">OUR MENU</p>
      <h2 class="section__header">Menu That Always Makes You Fall In Love</h2>
      <!-- Slider main container -->
      <div class="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide">
            <div class="menu__card">
              <img src="assets/dimsum_mentai.png" alt="menu" />
              <div class="menu__card__details">
                <h4>Dimsum Mentai</h4>
                <h5><span>IDR</span>25K</h5>
                <a href="#">
                  Order Now
                  <span><i class="ri-arrow-right-line"></i></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './our-menu.component.css',
})
export class OurMenuComponent {}
