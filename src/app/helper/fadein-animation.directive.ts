import {Directive, ElementRef, OnDestroy, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appFadeinAnimation]',
  standalone: true
})
export class FadeinAnimationDirective implements OnInit, OnDestroy {
  private observer: IntersectionObserver | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Jika elemen terlihat, tambahkan class 'in-view'
          this.renderer.addClass(this.el.nativeElement, 'in-view');
        } else {
          // Jika elemen TIDAK terlihat, HAPUS class 'in-view'
          // Ini kunci agar animasi bisa berulang
          this.renderer.removeClass(this.el.nativeElement, 'in-view');
        }
      });
    });

    // Mulai amati elemen ini
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    // Hentikan pengamatan saat komponen dihancurkan untuk mencegah kebocoran memori
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
