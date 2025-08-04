import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { OurServiceComponent } from "./components/our-service/our-service.component";
import { OurMenuComponent } from "./components/our-menu/our-menu.component";
import { CustomerFeedbackComponent } from "./components/customer-feedback/customer-feedback.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MapsComponent } from './components/maps/maps.component';
import { GaleryComponent } from "./components/galery/galery.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, OurServiceComponent, OurMenuComponent, CustomerFeedbackComponent, FooterComponent, MapsComponent, GaleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Saji Kitchen';
  isLoadAnimation = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoadAnimation = false;
    }, 1000);
  }
}
