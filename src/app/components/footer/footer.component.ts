import { Component } from '@angular/core';
import { ConstantApi } from '../../constants/constant-api';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  currentYear: number;
  api_wa: string = ConstantApi.API_WA;
  api_x: string = ConstantApi.API_X;
  api_instagram: string = ConstantApi.API_INSTAGRAM;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }
}
