import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";

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
  readonly itemsPerSlide = 4;
  transitionStyle = 'transform 0.5s ease-in-out';

  // Variabel baru untuk mengunci aksi selama transisi
  private isTransitioning = false;

  get isCarouselActive(): boolean {
    return this.reviews.length > this.itemsPerSlide;
  }

  ngOnInit(): void {
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
  }

  startAutoSlide(): void {
    if (this.isCarouselActive) {
      this.intervalId = setInterval(() => {
        this.next();
      }, 5000);
    }
  }

  // --- PERUBAHAN UTAMA ADA DI SINI ---

  next(): void {
    // Abaikan jika sedang transisi atau carousel tidak aktif
    if (this.isTransitioning || !this.isCarouselActive) return;
    // Kunci aksi
    this.isTransitioning = true;
    this.currentIndex++;
  }

  prev(): void {
    // Abaikan jika sedang transisi atau carousel tidak aktif
    if (this.isTransitioning || !this.isCarouselActive) return;
    // Kunci aksi
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
    // Cek untuk loop dari kanan ke kiri (setelah `next`)
    if (this.currentIndex >= this.reviews.length + this.itemsPerSlide) {
      this.transitionStyle = 'none';
      this.currentIndex = this.itemsPerSlide;
      setTimeout(() => {
        this.transitionStyle = 'transform 0.5s ease-in-out';
        this.isTransitioning = false; // Buka kunci setelah transisi siap
      });
      return; // Keluar dari fungsi lebih awal
    }

    // Cek untuk loop dari kiri ke kanan (setelah `prev`)
    if (this.currentIndex < this.itemsPerSlide) {
      this.transitionStyle = 'none';
      this.currentIndex = this.reviews.length + this.itemsPerSlide - 1;
      setTimeout(() => {
        this.transitionStyle = 'transform 0.5s ease-in-out';
        this.isTransitioning = false; // Buka kunci setelah transisi siap
      });
      return; // Keluar dari fungsi lebih awal
    }

    // Jika tidak ada 'lompatan', buka kunci setelah transisi normal selesai
    this.isTransitioning = false;
  }

  // --- BATAS PERUBAHAN ---

  getStars(rating: number): number[] {
    return Array(Math.round(rating)).fill(0);
  }
}
