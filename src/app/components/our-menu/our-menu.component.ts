import { Component } from '@angular/core';


@Component({
  selector: 'app-our-menu',
  standalone: true,
  imports: [],
  templateUrl: './our-menu.component.html',
  styleUrl: './our-menu.component.css',
})
export class OurMenuComponent {

  orderWhatsapp() {
    window.open('https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2FYAVOTB3HUMIHO1%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAafKuBjjYTZJ8PKHCUy3zw1BmduYfQ1rwqAWcqskWgiGCXQta9CUzbHhUkFacA_aem_ZNGLUy4uBZJqB8jFn6u8JA&e=AT1ycYxVEiInn290wux0cYF2_3wpTWZ9EMbsgyhN19WnjqLiyt4NsV-ex-NK16_wj588bPDFDDHrz5nfp3txXs0kkyBgCJDDrvTDOiU', '_blank');
  }

}
