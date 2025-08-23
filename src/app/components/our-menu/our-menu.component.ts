import { Component } from '@angular/core';
import { ConstantApi } from '../../constants/constant-api';
import {ScrollAnimationDirective} from "../../helper/scroll-animation.directive";
import {FadeinAnimationDirective} from "../../helper/fadein-animation.directive";


@Component({
  selector: 'app-our-menu',
  standalone: true,
  imports: [
    ScrollAnimationDirective,
    FadeinAnimationDirective
  ],
  templateUrl: './our-menu.component.html',
  styleUrl: './our-menu.component.scss',
})
export class OurMenuComponent {
  api_wa: string = ConstantApi.API_WA

  orderWhatsapp() {
    window.open(this.api_wa, '_blank');
  }

}
