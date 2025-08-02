import { Component } from '@angular/core';

@Component({
  selector: 'app-our-service',
  standalone: true,
  imports: [],
  template: `
    <section class="section__container service__container" id="service">
      <p class="section__subheader">WHAT WE SERVE</p>
      <h2 class="section__header">Your Favourite Food Delivery Partner</h2>
      <div class="service__grid">
        <div class="service__card">
          <img src="assets/service-1.jpg" alt="service" />
          <h4>Easy To Order</h4>
          <p>You only need a few steps in ordering food</p>
        </div>
        <div class="service__card">
          <img src="assets/service-2.jpg" alt="service" />
          <h4>Fastest Delivery</h4>
          <p>Delivery that is always ontime even faster</p>
        </div>
        <div class="service__card">
          <img src="assets/service-3.jpg" alt="service" />
          <h4>Best Quality</h4>
          <p>Not only fast for us quality is also number one</p>
        </div>
      </div>
    </section>
  `,
  styleUrl: './our-service.component.css',
})
export class OurServiceComponent {}
