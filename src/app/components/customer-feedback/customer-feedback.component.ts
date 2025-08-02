import { Component } from '@angular/core';
import { GetAppComponent } from '../get-app/get-app.component';

@Component({
  selector: 'app-customer-feedback',
  standalone: true,
  imports: [GetAppComponent],
  template: `
    <section class="section__container client__container" id="client">
      <div class="client__image">
        <img src="assets/client.png" alt="client" />
      </div>
      <div class="client__content">
        <p class="section__subheader">WHAT THEY SAY</p>
        <h2 class="section__header">What Our Customers Say About Us</h2>
        <p class="section__description">
          "Gilee ini siomay mentai nya ueenakk bangeettt. Daging ayamnya terasa fresh dan lembut di setiap gigitan. Saus mentai nya creamy dan lumer di mulut, menciptakan perpaduan rasa yang umami dan sulit dilupakan.. Pokoknya, ini sih siomay mentai terenak yang pernah aku coba. Kudu repeat order nih!"
        </p>
        <div class="client__details">
          <img src="assets/user.jpg" alt="client" />
          <div>
            <h4>Frans Yosafat Edward</h4>
            <h5>IT Adviser BCA</h5>
          </div>
        </div>
        <div class="client__rating">
          <span><i class="ri-star-fill"></i></span>
          <span><i class="ri-star-fill"></i></span>
          <span><i class="ri-star-fill"></i></span>
          <span><i class="ri-star-fill"></i></span>
          <span><i class="ri-star-line"></i></span>
          <span>4.8</span>
        </div>
      </div>
    </section>
  `,
  styleUrl: './customer-feedback.component.css',
})
export class CustomerFeedbackComponent {}
