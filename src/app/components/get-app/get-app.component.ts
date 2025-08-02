import { Component } from '@angular/core';

@Component({
  selector: 'app-get-app',
  standalone: true,
  imports: [],
  template: `
    <section class="download__container" id="contact">
      <div class="section__container">
        <div class="download__image">
          <img src="assets/download.png" alt="download" />
        </div>
        <div class="download__content">
          <p class="section__subheader">DOWNLOAD APP</p>
          <h2 class="section__header">Get Started With The Food Today!</h2>
          <p class="section__description">
            Satisfy your cravings anytime, anywhere, with seamless ordering and
            swift delivery straight to your door.
          </p>
          <div class="download__btn">
            <button class="btn">Get The App</button>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './get-app.component.css',
})
export class GetAppComponent {}
