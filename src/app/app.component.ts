import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { OurServiceComponent } from "./components/our-service/our-service.component";
import { OurMenuComponent } from "./components/our-menu/our-menu.component";
import { CustomerFeedbackComponent } from "./components/customer-feedback/customer-feedback.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, OurServiceComponent, OurMenuComponent, CustomerFeedbackComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'food_UI';
}
