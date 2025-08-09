import { Component } from '@angular/core';
import {ScrollAnimationDirective} from "../../helper/scroll-animation.directive";

@Component({
  selector: 'app-our-service',
  standalone: true,
  imports: [
    ScrollAnimationDirective
  ],
  templateUrl: './our-service.component.html',
  styleUrl: './our-service.component.scss',
})
export class OurServiceComponent {}
