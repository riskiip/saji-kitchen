import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective implements OnInit {
// Opsi untuk menambahkan delay yang berbeda untuk setiap kartu
  @Input() animationDelay: string = '0s';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'transition-delay', this.animationDelay);

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Jika elemen masuk ke dalam viewport
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'is-visible');
        }
        // Jika elemen keluar dari viewport
        else {
          this.renderer.removeClass(this.el.nativeElement, 'is-visible');
        }
      });
    }, options);

    observer.observe(this.el.nativeElement);
  }
}
