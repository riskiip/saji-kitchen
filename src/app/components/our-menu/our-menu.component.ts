import { Component } from '@angular/core';
import { ConstantApi } from '../../constants/constant-api';


@Component({
  selector: 'app-our-menu',
  standalone: true,
  imports: [],
  templateUrl: './our-menu.component.html',
  styleUrl: './our-menu.component.css',
})
export class OurMenuComponent {
  api_wa: string = ConstantApi.API_WA

  orderWhatsapp() {
    window.open(this.api_wa, '_blank');
  }

}
