import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'; // DITAMBAHKAN
import { Subscription } from 'rxjs'; // DITAMBAHKAN

interface Review {
  nama: string;
  review: string;
  score: number;
  foto: string;
}

@Component({
  selector: 'app-customer-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-feedback.component.html',
  styleUrl: './customer-feedback.component.scss',
})
export class CustomerFeedbackComponent implements OnInit, OnDestroy {
  reviews: Review[] = [
    { nama: "Farhan Pratama", review: "Worth the price", score: 5, foto: "assets/images/profile-male-1.jpg" },
    { nama: "Sisca", review: "dimsum mentainya enakk, ukuran dimsumnya juga besar dan berasa daging ayamnyaa 💯", score: 5, foto: "assets/images/profile-female-1.jpg" },
    { nama: "Ayu Galuh", review: "Enak bangetttt, daging nya banyakk. Mentai nya juga mantapp bangett", score: 5, foto: "assets/images/profile-male-2.jpg" },
    { nama: "Bernanda F. Putri", review: "yummy sekalii dagingnya terasaa, mentainya juga enakkkk", score: 5, foto: "assets/images/profile-female-2.jpg" },
    { nama: "Rizky", review: "Akan pesan lagi pastinya!", score: 5, foto: "assets/images/profile-male-1.jpg" },
    { nama: "Dewi", review: "Saus mentainya juara, beda dari yang lain.", score: 5, foto: "assets/images/profile-female-1.jpg" },
    { nama: "Andi", review: "Pelayanannya cepat dan rasanya konsisten.", score: 5, foto: "assets/images/profile-male-2.jpg" },
  ];

  displayReviews: Review[] = [];
  currentIndex = 0;
  private intervalId?: any;

  // DIUBAH: itemsPerSlide menjadi dinamis
  itemsPerSlide = 4; // Default untuk desktop
  isMobile = false;
  private breakpointSubscription: Subscription | undefined;

  transitionStyle = 'transform 0.5s ease-in-out';
  private isTransitioning = false;

  // DITAMBAHKAN: Inject BreakpointObserver
  constructor(private breakpointObserver: BreakpointObserver) {}

  get isCarouselActive(): boolean {
    // Logika disesuaikan dengan jumlah item yang tampil
    return this.reviews.length > this.itemsPerSlide;
  }

  ngOnInit(): void {
    // DITAMBAHKAN: Mengamati perubahan ukuran layar
    this.breakpointSubscription = this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .subscribe(result => {
        this.isMobile = result.matches;
        // Atur ulang carousel setiap kali breakpoint berubah
        this.setupCarousel();
      });
  }

  // DITAMBAHKAN: Fungsi baru untuk mengatur ulang carousel
  setupCarousel(): void {
    // Hentikan auto slide yang sedang berjalan
    clearInterval(this.intervalId);

    // Tentukan jumlah item per slide berdasarkan ukuran layar
    this.itemsPerSlide = this.isMobile ? 1 : 4;

    if (this.isCarouselActive) {
      const clonesFromStart = this.reviews.slice(0, this.itemsPerSlide);
      const clonesFromEnd = this.reviews.slice(-this.itemsPerSlide);
      this.displayReviews = [...clonesFromEnd, ...this.reviews, ...clonesFromStart];

      this.transitionStyle = 'none';
      this.currentIndex = this.itemsPerSlide;

      setTimeout(() => {
        this.transitionStyle = 'transform 0.5s ease-in-out';
        this.startAutoSlide();
      });
    } else {
      this.displayReviews = this.reviews;
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    // DITAMBAHKAN: Unsubscribe untuk mencegah memory leak
    this.breakpointSubscription?.unsubscribe();
  }

  startAutoSlide(): void {
    if (this.isCarouselActive) {
      this.intervalId = setInterval(() => {
        this.next();
      }, 5000);
    }
  }

  next(): void {
    if (this.isTransitioning || !this.isCarouselActive) return;
    this.isTransitioning = true;
    this.currentIndex++;
  }

  prev(): void {
    if (this.isTransitioning || !this.isCarouselActive) return;
    this.isTransitioning = true;
    this.currentIndex--;
  }

  manualNext(): void {
    clearInterval(this.intervalId);
    this.next();
    this.startAutoSlide();
  }

  manualPrev(): void {
    clearInterval(this.intervalId);
    this.prev();
    this.startAutoSlide();
  }

  onTransitionEnd(): void {
    if (this.currentIndex >= this.reviews.length + this.itemsPerSlide) {
      this.transitionStyle = 'none';
      this.currentIndex = this.itemsPerSlide;
      setTimeout(() => {
        this.transitionStyle = 'transform 0.5s ease-in-out';
        this.isTransitioning = false;
      });
      return;
    }

    if (this.currentIndex < this.itemsPerSlide) {
      this.transitionStyle = 'none';
      this.currentIndex = this.reviews.length + this.itemsPerSlide - 1;
      setTimeout(() => {
        this.transitionStyle = 'transform 0.5s ease-in-out';
        this.isTransitioning = false;
      });
      return;
    }

    this.isTransitioning = false;
  }

  getStars(rating: number): number[] {
    return Array(Math.round(rating)).fill(0);
  }
}
