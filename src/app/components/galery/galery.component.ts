import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galery.component.html',
  styleUrl: './galery.component.css'
})
export class GaleryComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('carouselContainer') carouselContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('carouselTrack') carouselTrack!: ElementRef<HTMLDivElement>;
  @ViewChildren('carouselImgs') carouselImgs!: QueryList<ElementRef<HTMLImageElement>>;

  images = [
    'assets/dimsum/dimsum1.jpg',
    'assets/dimsum/dimsum2.jpg',
    'assets/dimsum/dimsum3.jpg',
    'assets/dimsum/dimsum4.jpg'
  ];
  currentIndex = 1;
  intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngAfterViewInit() {
    this.scrollToActive();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  resetAutoSlide() {
    clearInterval(this.intervalId);
    this.startAutoSlide();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.scrollToActive();
    this.resetAutoSlide();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.scrollToActive();
    this.resetAutoSlide();
  }

  scrollToActive() {
    setTimeout(() => {
      const imgs = this.carouselImgs.toArray();
      const activeImg = imgs[this.currentIndex]?.nativeElement;
      // Ganti 'track' menjadi 'container' untuk elemen yang akan di-scroll
      const container = this.carouselContainer?.nativeElement;

      if (activeImg && container) {
        // Logika kalkulasi scrollLeft diubah agar berpusat pada container
        const scrollLeft =
          activeImg.offsetLeft - container.clientWidth / 2 + activeImg.clientWidth / 2;

        // Perintahkan container untuk scroll, bukan track
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }, 50); // Timeout kecil untuk memastikan elemen sudah dirender
  }
}
